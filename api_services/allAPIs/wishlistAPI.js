import { baseURL } from "../../api_services/allAPIs/baseURL";
import { commonAPI } from "../../api_services/allAPIs/commonAPI";

export const getWishlistAPI = async () => {
    return await commonAPI("get", `${baseURL}/wishlist`, {}, "");
};

export const addToWishlistAPI = async (data) => {
    return await commonAPI("post", `${baseURL}/wishlist`, data, "");
};

export const removeFromWishlistAPI = async (id) => {
    return await commonAPI("delete", `${baseURL}/wishlist/${id}`, {}, "");
};