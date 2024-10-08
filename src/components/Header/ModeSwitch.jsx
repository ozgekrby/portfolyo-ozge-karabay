import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrievalData, selectLang } from "../../redux/actions/actions";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { getSystemLanguage } from "../../hooks/getLanguage";

export default function ModeSwitch() {
  const dispatch = useDispatch();
  const [lang, updateLang] = useLocalStorage("lang", getSystemLanguage());
  const modeSwitch = useSelector((state) => state.data.modeSwitch);
  const [darkMode, updateDarkMode] = useLocalStorage(
    "darkMode",
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    dispatch(retrievalData(lang));
  }, [dispatch, lang]);

  const handleLanguageChange = () => {
    const newLang = lang === "tr" ? "en" : "tr";
    updateLang(newLang);
    dispatch(selectLang(newLang));
  };

  const handleMode = () => {
    updateDarkMode(!darkMode);
  };

  useEffect(() => {
    const bodyClass = document.body.classList;
    if (darkMode) {
      bodyClass.add("dark", "bg-slate-900");
    } else {
      bodyClass.remove("dark", "bg-slate-900");
    }
  }, [darkMode]);

  return (
    <div className="flex gap-6 items-center justify-end tracking-wider">
      <div className="flex items-center justify-center">
        <label className="inline-flex items-center cursor-pointer" aria-label="Toggle dark mode">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={handleMode}
            checked={darkMode}
            aria-checked={darkMode}
          />
          <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="text-lg ms-2 font-bold text-dark-languageDark dark:text-gray-300">
            {darkMode ? modeSwitch.darkMode : modeSwitch.lightMode}
          </span>
        </label>
      </div>
      <span className="text-lg ms-2 font-bold text-dark-languageDark">|</span>
      <div className="flex items-center justify-center">
        <span onClick={handleLanguageChange} className="flex items-center" role="button" aria-label="Change language">
          {lang === "tr" ? (
            <p className="text-lg ms-2 font-bold text-primary">
              {modeSwitch.switch1}{" "}
              <span className="text-dark-languageDark">{modeSwitch.switch}</span>
            </p>
          ) : (
            <p className="text-lg ms-2 font-bold text-primary">
              <span className="text-lg ms-2 font-bold text-dark-languageDark">{modeSwitch.switch}</span>{" "}
              {modeSwitch.switch1}
            </p>
          )}
        </span>
      </div>
    </div>
  );
}
