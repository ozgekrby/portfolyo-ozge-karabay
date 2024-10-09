import axios from "axios";
import { fetchData } from "../../api/api";
import data from "../../data/data.json";
export const retrievalData = (lang) => {
  return (dispatch) => {

    const isDataLoaded = sessionStorage.getItem("dataLoaded");

    if (isDataLoaded===true) {
      return;
    }
    fetchData("/workintech", lang, data)
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
          payload: { section, data: response.data[section] },
        });
        
      });
      sessionStorage.setItem("dataLoaded", "true");
      
    })
      .catch((error) => {
        console.log(error);
      });
  };
};
