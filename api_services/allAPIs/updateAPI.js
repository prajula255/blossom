import { baseURL } from "../baseURL";
import { commonAPI } from "../commonAPI";

export const updateStockAPI = async (id, newStock) => {
  const token = localStorage.getItem("authToken"); // must be stored after login

  const headers = {
    Authorization: token, // Must match exactly
  };

  return await commonAPI(
    "put",
    `${baseURL}/updateFlowers/${id}`,
    { stock: newStock },
    headers
  );
};
