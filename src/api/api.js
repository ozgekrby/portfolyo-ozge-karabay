
import axiosInstance from "./apiInstance";

export const fetchData = (endPoint,lang,data) => {
  return axiosInstance.post(endPoint, data[lang]);
};