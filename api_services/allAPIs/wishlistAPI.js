import { baseURL } from "../baseURL";
import { commonAPI } from "../commonAPI";

export const getWishlistAPI = async () => {
  return await commonAPI("get", `${baseURL}/wishlist`, {}, "");
};

export const addToWishlistAPI = async (data) => {
  return await commonAPI("post", `${baseURL}/wishlist`, data, "");
};

export const removeFromWishlistAPI = async (id) => {
  return await commonAPI("delete", `${baseURL}/wishlist/${id}`, {}, "");
};
