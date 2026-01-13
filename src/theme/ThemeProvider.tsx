import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { ThemeContext, type Theme, type ThemeContextValue } from "./context";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const getInitial = (): Theme => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved as Theme;
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  };

  const [theme, setThemeState] = useState<Theme>(getInitial);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      const meta = document.querySelector(
        'meta[name="theme-color"]',
      ) as HTMLMetaElement | null;
      if (meta) meta.content = "#0B0F14";
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      const meta = document.querySelector(
        'meta[name="theme-color"]',
      ) as HTMLMetaElement | null;
      if (meta) meta.content = "#F3F4F6";
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const setTheme = (t: Theme) => setThemeState(t);
  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    const meta = document.querySelector(
      'meta[name="theme-color"]',
    ) as HTMLMetaElement | null;
    if (next === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      if (meta) meta.content = "#0B0F14";
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      if (meta) meta.content = "#F3F4F6";
    }
    localStorage.setItem("theme", next);
    setThemeState(next);
  };

  const value: ThemeContextValue = { theme, setTheme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
