import { baseURL } from "../baseURL"
import { commonAPI } from "../commonAPI"

export const registerAPI= async (data)=>{
    return await commonAPI("post",`${baseURL}/reg`,data,"")
}

export const addFlowerAPI= async (data,headers)=>{
    return await commonAPI("post",`${baseURL}/addFlower`,data,headers)
}