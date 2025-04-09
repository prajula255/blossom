import { baseURL } from "../baseURL";
import { commonAPI } from "../commonAPI";

export const clearCartAPI=async(data)=>{
    return await commonAPI("delete", `${baseURL}/clearcart`, data, "");
}