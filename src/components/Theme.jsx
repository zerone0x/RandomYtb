import { useEffect } from "react";
import { useTheme } from "../data/getTheme";
import { darkTheme, lightTheme } from "../utils/data";

export default function Theme() {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const themeVariables = theme === "light" ? lightTheme : darkTheme;
    for (const key in themeVariables) {
      document.documentElement.style.setProperty(key, themeVariables[key]);
    }
  }, [theme]);
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="theme-toggle"
    >
      {theme === "light" ? "🌙" : "🌞"}
    </button>
  );
}
