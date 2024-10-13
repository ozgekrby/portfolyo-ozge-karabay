import axios from "axios";
import { fetchData } from "../../api/api";
import data from "../../data/data.json";

export const retrievalData = (lang) => {
  return (dispatch) => {
    const storedData = sessionStorage.getItem("fetchedData");
    const isDataLoaded = sessionStorage.getItem("dataLoaded");

    if (isDataLoaded === "true" && storedData) {
      const parsedData = JSON.parse(storedData);
      const sections = [
        "modeSwitch",
        "header",
        "hero",
        "skills",
        "profile",
        "projects",
        "footer",
        "titles",
      ];

      sections.forEach((section) => {
        dispatch({
          type: "SET_DATA",
          payload: { section, data: parsedData[lang][section] },
        });
      });
      return;
    }

    fetchData("/workintech", data)
      .then((response) => {
        console.log(response);
        const sections = [
          "modeSwitch",
          "header",
          "hero",
          "skills",
          "profile",
          "projects",
          "footer",
          "titles",
        ];

        sections.forEach((section) => {
          dispatch({
            type: "SET_DATA",
            payload: { section, data: response.data[lang][section] },
          });
        });

        sessionStorage.setItem("fetchedData", JSON.stringify(response.data));
        sessionStorage.setItem("dataLoaded", "true");
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: "SET_ERROR",
          payload: error.message,
        });
      });
  };
};
