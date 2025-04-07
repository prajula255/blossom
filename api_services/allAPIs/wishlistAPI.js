import { baseURL } from "../baseURL";
import { commonAPI } from "../commonAPI";

const token = localStorage.getItem("authToken");

export const getWishlistAPI = async () => {
  return await commonAPI("get", `${baseURL}/wishlist`, {}, token);
};

export const addToWishlistAPI = async (data) => {
  return await commonAPI("post", `${baseURL}/wishlist`, data, token);
};

export const removeFromWishlistAPI = async (id) => {
  return await commonAPI("delete", `${baseURL}/wishlist/${id}`, {}, token);
};
