import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getSystemLanguage } from "../hooks/getLanguage";

export default function Loading() {
  const [lang] = useLocalStorage("lang", getSystemLanguage());
  const [darkMode, updateDarkMode] = useLocalStorage(
    "darkMode",
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  return (
    <div className={`flex justify-center items-center h-screen ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="flex flex-col items-center">
        <div className="relative mb-4">
          <div className="w-20 h-20 bg-primary rounded-full"></div>
          <div className="w-20 h-20 bg-primary rounded-full absolute top-0 left-0 animate-ping"></div>
          <div className="w-20 h-20 bg-primary rounded-full absolute top-0 left-0 animate-pulse"></div>
        </div>
        <h1 className="text-center text-7xl text-secondary dark:text-dark-blueGray animate-pulse">
          {lang === "en" ? "WELCOME" : "HOŞ GELDİNİZ"}
        </h1>
        <br />
      </div>
    </div>
  );
}
