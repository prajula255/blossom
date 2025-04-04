import { baseURL } from "../baseURL";
import { commonAPI } from "../commonAPI";

export const addFlowerAPI = async (data, headers) => {
  return await commonAPI("post", `${baseURL}/addFlower`, data, headers);
};
