import { useEffect } from "react";

const ThemeToggle = () => {
  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    console.log("Current Body Classes:", document.body.className);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, []);

  return (
    <button onClick={toggleTheme} aria-label="Toggle Theme">
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;