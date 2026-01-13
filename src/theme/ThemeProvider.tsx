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
    const body = document.body;
    if (theme === "dark") {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const setTheme = (t: Theme) => setThemeState(t);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const value: ThemeContextValue = { theme, setTheme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
