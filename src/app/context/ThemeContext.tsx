"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type ThemeContextType = {
  darkMode: boolean;
  actions: {
    toggleTheme: () => void;
  };
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    localStorage.setItem("darkMode", JSON.stringify(nextMode));
    document.documentElement.setAttribute("data-theme", nextMode ? "dark" : "light");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("darkMode");

      const isDark =
        stored !== null
          ? stored === "true"
          : window.matchMedia("(prefers-color-scheme: dark)").matches;

      setDarkMode(isDark);
      document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    }
  }, []);


  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        actions: {
          toggleTheme,
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
