import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getSystemLanguage } from "../hooks/getLanguage";

export default function Loading() {
  const [lang] = useLocalStorage("lang", getSystemLanguage());

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <div className="relative mb-4">
          <div className="w-20 h-20 bg-primary rounded-full"></div>
          <div className="w-20 h-20 bg-primary rounded-full absolute top-0 left-0 animate-ping"></div>
          <div className="w-20 h-20 bg-primary rounded-full absolute top-0 left-0 animate-pulse"></div>
        </div>
        <h1 className="text-center text-7xl text-secondary ">
          {lang === "en" ? "WELCOME" : "HOŞ GELDİNİZ"}
        </h1>
        <br />
      </div>
    </div>
  );
}
