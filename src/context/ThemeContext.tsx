// src/context/ThemeContext.tsx
"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

const THEME_STORAGE_KEY = "astro-portal-theme";

function getSystemPreference(): Theme {
  if (typeof window === "undefined") return "light";
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    const initialTheme = stored ?? getSystemPreference();
    setTheme(initialTheme);
  }, []);

  // Apply theme to <html> data-theme and persist to localStorage
  useEffect(() => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value: ThemeContextValue = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}