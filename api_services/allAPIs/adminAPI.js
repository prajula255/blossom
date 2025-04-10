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

export const getAllUsersAPI = async () => {
  return await commonAPI("get", `${baseURL}/admin/users`, {}, "");
};

export const getAllOrdersAPI = async () => {
  return await commonAPI("get", `${baseURL}/admin/orders`, {}, "");
};

// export const getAllUsersAPI = () => {
//   const token = localStorage.getItem("authToken");
//   return axios.get(`${baseURL}/users`, {
//     headers: { Authorization: `${token}` },
//   });
// };

