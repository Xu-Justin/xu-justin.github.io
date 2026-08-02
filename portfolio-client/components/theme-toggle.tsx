"use client";

import { useTheme } from "next-themes";
import { useState, useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [spinning, setSpinning] = useState(false);

  function toggle() {
    setSpinning(true);
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  function handleAnimationEnd() {
    setSpinning(false);
  }

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="flex items-center justify-center w-8 h-8 text-muted-foreground hover:text-primary transition-colors duration-200"
      >
        <SunIcon />
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex items-center justify-center w-8 h-8 text-muted-foreground hover:text-primary transition-colors duration-200"
    >
      <span
        onAnimationEnd={handleAnimationEnd}
        className={
          spinning
            ? "animate-spin animation-duration-[0.2s] shimmer-once ease-in-out"
            : undefined
        }
      >
        {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}
