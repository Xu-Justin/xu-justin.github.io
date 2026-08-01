"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0-5a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm9-9h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM5 12a1 1 0 0 1-1 1H2a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1zm12.07-7.07a1 1 0 0 1 0 1.41l-1.41 1.42a1 1 0 1 1-1.42-1.42l1.42-1.41a1 1 0 0 1 1.41 0zM7.76 16.24a1 1 0 0 1 0 1.41l-1.41 1.42a1 1 0 1 1-1.42-1.42l1.42-1.41a1 1 0 0 1 1.41 0zm9.9 1.41a1 1 0 0 1-1.41 0l-1.42-1.41a1 1 0 1 1 1.42-1.42l1.41 1.42a1 1 0 0 1 0 1.41zM7.76 7.76a1 1 0 0 1-1.41 0L4.93 6.34a1 1 0 1 1 1.42-1.42l1.41 1.42a1 1 0 0 1 0 1.42z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
    </svg>
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        style={spinning ? { animation: "spin 0.4s linear" } : undefined}
      >
        {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}
