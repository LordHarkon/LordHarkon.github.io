import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const value = window.localStorage.getItem("theme") || "light";
    return value === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div
      className="flex h-8 cursor-pointer items-center justify-center space-x-1 text-white"
      onClick={() => setIsDarkMode((prev) => !prev)}
    >
      {isDarkMode ? (
        <>
          <HiMoon className="pointer-events-none h-6 w-6" />
          <span>Dark Theme</span>
        </>
      ) : (
        <>
          <HiSun className="pointer-events-none h-6 w-6" />
          <span>Light Theme</span>
        </>
      )}
    </div>
  );
};

export default ThemeSwitch;
