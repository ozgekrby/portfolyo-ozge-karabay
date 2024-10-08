import { useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      if (value !== null) {
        return JSON.parse(value);
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
  });

  const setLocalStorageStateValue = (valueOrFn) => {
    try {
      const newValue =
        typeof valueOrFn === "function"
          ? valueOrFn(localStorageValue)
          : valueOrFn;
      localStorage.setItem(key, JSON.stringify(newValue));
      setLocalStorageValue(newValue);
    } catch (error) {
      console.error("Error setting localStorage value:", error);
    }
  };

  return [localStorageValue, setLocalStorageStateValue];
};
