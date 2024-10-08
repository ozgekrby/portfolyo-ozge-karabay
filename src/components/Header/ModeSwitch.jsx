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
    <div className="flex gap-4 items-center justify-end tracking-wider">
      <div className="flex items-center justify-center">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={handleMode}
            checked={darkMode}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="text-sm ms-1 font-bold text-dark-languageDark dark:text-gray-300">
            {darkMode ? modeSwitch.darkMode : modeSwitch.lightMode}
          </span>
        </label>
      </div>
      <span className="text-sm ms-1 font-bold text-dark-languageDark">|</span>
      <div className="flex items-center justify-center">
        <span onClick={handleLanguageChange} className="flex items-center">
          {lang === "tr" ? (
            <p className="text-sm ms-1 font-bold text-primary">
              {modeSwitch.switch1}{" "}
              <span className=" text-dark-languageDark">
                {modeSwitch.switch}
              </span>
            </p>
          ) : (
            <p className="text-sm ms-1 font-bold text-primary">
              <span className="text-sm ms-1 font-bold text-dark-languageDark">
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
