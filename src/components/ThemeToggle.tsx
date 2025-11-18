// src/components/ThemeToggle.tsx
"use client";

import { useTheme } from "@/context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const label = theme === "light" ? "Switch to dark" : "Switch to light";
  const icon = theme === "light" ? "🌙" : "☀️";

  return (
    <button className="button" onClick={toggleTheme} aria-label={label}>
      <span>{icon}</span>
      <span>{theme === "light" ? "Dark mode" : "Light mode"}</span>
    </button>
  );
}
