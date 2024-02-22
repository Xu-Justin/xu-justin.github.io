import {SxProps, Theme} from "@mui/material";

export const limitLines = (line: number): SxProps<Theme> => {
    return {
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        WebkitLineClamp: line,
        WebkitBoxOrient: "vertical",
    }
}
