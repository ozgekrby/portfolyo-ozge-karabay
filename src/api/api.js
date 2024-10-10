
import axiosInstance from "./apiInstance";

export const fetchData = (endPoint,data) => {
  return axiosInstance.post(endPoint, data);
};