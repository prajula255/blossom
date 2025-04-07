import { baseURL } from "../baseURL";
import { commonAPI } from "../commonAPI";

// Add to cart
export const addToCartAPI = async (product) => {
  const token = localStorage.getItem("authToken");

  return await commonAPI("post", `${baseURL}/cart`, product, {
    Authorization: token,
  });
};

// Get cart items
export const getCartAPI = async () => {
  const token = localStorage.getItem("authToken");

  return await commonAPI("get", `${baseURL}/cart`, {}, {
    Authorization: token,
  });
};

// Update quantity
export const updateCartItemAPI = async (id, quantity) => {
  const token = localStorage.getItem("authToken");

  return await commonAPI("put", `${baseURL}/cart/${id}`, { quantity }, {
    Authorization: token,
  });
};

// Remove from cart
export const removeFromCartAPI = async (id) => {
  const token = localStorage.getItem("authToken");

  return await commonAPI("delete", `${baseURL}/cart/${id}`, {}, {
    Authorization: token,
  });
};
