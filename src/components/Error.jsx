import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useSelector } from "react-redux";
export default function Error() {
  const [darkMode] = useLocalStorage(
    "darkMode",
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const error = useSelector((state) => state.error);

  return (
    <div
      className={`flex justify-center items-center h-screen ${
        darkMode ? "bg-slate-900" : "bg-white"
      }`}
    >
      <div className="flex flex-col items-center">
        <div className="relative mb-4">
          <div
            className={`w-20 h-20 ${
              error.length > 0 ? "bg-light-red" : "bg-primary"
            } rounded-full`}
          ></div>
          <div
            className={`w-20 h-20 ${
              error.length > 0 ? "bg-light-red" : "bg-primary"
            } rounded-full absolute top-0 left-0 animate-ping`}
          ></div>
          <div
            className={`w-20 h-20 ${
              error.length > 0 ? "bg-light-red" : "bg-primary"
            } rounded-full absolute top-0 left-0 animate-pulse`}
          ></div>
        </div>
        <div className="text-center text-7xl text-secondary dark:text-dark-blueGray animate-pulse">
          {error.length > 0 ? <p className="text-light-red">{error}</p> : ""}
        </div>
        <br />
      </div>
    </div>
  );
}
