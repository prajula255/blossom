import { baseURL } from "../baseURL";
import { commonAPI } from "../commonAPI";

export const addFlowerAPI = async (data, headers) => {
  return await commonAPI("post", `${baseURL}/addFlower`, data, headers);
};


export const deleteFlowerAPI = async (id) => {
  const token = localStorage.getItem("authToken");

  const headers = {
    Authorization: token,
  };

  return await commonAPI("delete", `${baseURL}/deleteFlower/${id}`, {}, headers);
};
