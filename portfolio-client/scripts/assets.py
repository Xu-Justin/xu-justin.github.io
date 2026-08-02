import argparse
import logging
import os

from PIL import Image

SUPPORTED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
logger = logging.getLogger(__name__)


def parse_args(argv=None):
    parser = argparse.ArgumentParser(description="Image processing CLI tool")
    parser.add_argument(
        "--paths", nargs="+", required=True,
        help="One or more file or directory paths to process",
    )
    parser.add_argument("--max-width", type=int, default=None, help="Maximum width in pixels")
    parser.add_argument("--max-height", type=int, default=None, help="Maximum height in pixels")
    parser.add_argument("--webp", action="store_true", help="Convert output images to WebP format")
    parser.add_argument("--lossless", action="store_true", help="Use lossless WebP (implies --webp; good for logos with transparency)")
    parser.add_argument("--compress", type=int, default=None, help="Compression quality (1-100)")
    parser.add_argument("--overwrite", action="store_true", help="Overwrite existing files")
    parser.add_argument("--trim", action="store_true", help="Trim invisible rows and columns")
    parser.add_argument("--recursive", action="store_true", help="Recurse into subdirectories")
    parser.add_argument("--delete-original", action="store_true", help="Delete the original file after a successful format conversion")
    return parser.parse_args(argv)


def collect_files(paths, recursive=False):
    files = []
    for path in paths:
        if os.path.isdir(path):
            if recursive:
                for root, _dirs, names in os.walk(path):
                    for name in names:
                        files.append(os.path.join(root, name))
            else:
                for entry in os.listdir(path):
                    full = os.path.join(path, entry)
                    if os.path.isfile(full):
                        files.append(full)
        elif os.path.isfile(path):
            files.append(path)
        else:
            logger.warning("Path does not exist: %s", path)
    return files


def compute_new_size(width, height, max_width, max_height):
    scale = 1.0
    if max_width and width > max_width:
        scale = min(scale, max_width / width)
    if max_height and height > max_height:
        scale = min(scale, max_height / height)
    if scale < 1.0:
        return round(width * scale), round(height * scale)
    return width, height


def process_image(filepath, args):
    ext = os.path.splitext(filepath)[1].lower()
    if ext not in SUPPORTED_EXTENSIONS:
        logger.warning("Skipping unsupported file type: %s", filepath)
        return

    logger.info("Processing: %s", filepath)

    try:
        img = Image.open(filepath)
    except Exception as e:
        logger.error("Failed to open %s: %s", filepath, e)
        return

    if args.trim:
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            logger.info("Trimmed %s to %dx%d", filepath, img.size[0], img.size[1])

    width, height = img.size
    new_width, new_height = compute_new_size(width, height, args.max_width, args.max_height)

    if (new_width, new_height) != (width, height):
        img = img.resize((new_width, new_height), Image.LANCZOS)
        logger.info("Resized %s to %dx%d", filepath, new_width, new_height)

    use_webp = args.webp or args.lossless
    if use_webp:
        output_path = os.path.splitext(filepath)[0] + ".webp"
    else:
        output_path = filepath

    if os.path.exists(output_path) and output_path != filepath and not args.overwrite:
        logger.warning("File already exists, skipping: %s", output_path)
        return

    save_kwargs = {}
    if use_webp:
        save_kwargs["format"] = "WEBP"
        if args.lossless:
            save_kwargs["lossless"] = True
        elif args.compress is not None:
            save_kwargs["quality"] = args.compress
            save_kwargs["method"] = 6
    elif args.compress is not None:
        save_kwargs["quality"] = args.compress
        save_kwargs["optimize"] = True

    original_size = os.path.getsize(filepath)

    try:
        img.save(output_path, **save_kwargs)
        new_size = os.path.getsize(output_path)
        logger.info("Saved: %s (%.1f KB -> %.1f KB)", output_path, original_size / 1024, new_size / 1024)
    except Exception as e:
        logger.error("Failed to save %s: %s", output_path, e)
        return

    if args.delete_original and output_path != filepath:
        try:
            os.remove(filepath)
            logger.info("Deleted original: %s", filepath)
        except Exception as e:
            logger.error("Failed to delete original %s: %s", filepath, e)


def main():
    args = parse_args()
    files = collect_files(args.paths, recursive=args.recursive)
    for filepath in files:
        process_image(filepath, args)


if __name__ == "__main__":
    main()
