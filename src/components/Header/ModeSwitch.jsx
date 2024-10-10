import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrievalData } from "../../redux/actions/actions";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { getSystemLanguage } from "../../hooks/getLanguage";
import { toast } from "react-toastify";

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
  }, [dispatch,lang]);


  const handleLanguageChange = () => {
    const newLang = lang === "tr" ? "en" : "tr";
    updateLang(newLang);
    if (newLang === "tr") {
      toast.info("Türkçe'ye geçildi");
    } else if (newLang === "en") {
      toast.info("Switched to English");
    }
  };

  const handleMode = () => {
    const newDarkMode = !darkMode;
    updateDarkMode(newDarkMode);
    if (newDarkMode === true && lang === "tr") {
      toast.info("Karanlık Mode'a geçildi");
    } else if (newDarkMode === false && lang === "tr") {
      toast.info("Aydınlık Mode'a geçildi");
    } else if (newDarkMode === true && lang === "en") {
      toast.info("Switched to Dark Mode");
    } else if (newDarkMode === false && lang === "en") {
      toast.info("Switched to Light Mode");
    }
  };

  useEffect(() => {
    const bodyClass = document.body.classList;
    if (darkMode) {
      bodyClass.add("dark", "bg-slate-900");
    } else if(!darkMode) {
      bodyClass.remove("dark", "bg-slate-900");
    }
  }, [darkMode]);

  return (
    <div className="flex gap-6 items-center justify-end tracking-wider">
      <div className="flex items-center justify-center">
        <label
          className="inline-flex items-center cursor-pointer"
          aria-label="Toggle dark mode"
        >
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={handleMode}
            checked={darkMode}
            aria-checked={darkMode}
          />
          <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="text-sm ms-2 font-bold text-dark-languageDark dark:text-dark-gray">
            {darkMode ? modeSwitch.darkMode : modeSwitch.lightMode}
          </span>
        </label>
      </div>
      <span className="text-lg ms-2 font-bold text-dark-languageDark">|</span>
      <div className="flex items-center justify-center">
        <span
          onClick={handleLanguageChange}
          className="flex items-center"
          role="button"
          aria-label="Change language"
        >
          {lang === "tr" ? (
            <p className="text-sm ms-2 font-bold text-primary dark:text-dark-lightPurple">
              {modeSwitch.switch1}{" "}
              <span className="text-dark-languageDark">
                {modeSwitch.switch}
              </span>
            </p>
          ) : (
            <p className="text-sm ms-2 font-bold text-primary dark:text-dark-lightPurple">
              <span className="text-sm ms-2 font-bold text-dark-languageDark">
                {modeSwitch.switch}
              </span>{" "}
              {modeSwitch.switch1}
            </p>
          )}
        </span>
      </div>
    </div>
  );
}
