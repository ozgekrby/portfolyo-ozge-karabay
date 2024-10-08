export const getSystemLanguage = () => {
  const lang = navigator.language || navigator.userLanguage;
  return lang.startsWith("tr") ? "tr" : "en";
};
