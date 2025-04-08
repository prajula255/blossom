import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  getCartAPI,
  removeFromCartAPI,
  updateCartItemAPI,
} from "../../../api_services/allAPIs/cartAPI";
import { baseURL } from "../../../api_services/baseURL";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      setLoading(true);
      const res = await getCartAPI();
      setCartItems(res.data);
    } catch (err) {
      toast.error("Failed to fetch cart");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleQuantityChange = async (id, quantity) => {
    if (quantity < 1) {
      toast.warn("Quantity must be at least 1");
      return;
    }

    try {
      await updateCartItemAPI(id, quantity);
      toast.success("Quantity updated");
      fetchCart();
    } catch (err) {
      toast.error("Failed to update quantity");
    }
  };

  const handleRemove = async (id) => {
    try {
      await removeFromCartAPI(id);
      toast.success("Item removed");
      fetchCart();
    } catch (err) {
      toast.error("Failed to remove item");
    }
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (loading)
    return <p className="text-center text-lg font-medium">Loading cart...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">No items in cart.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row gap-4 items-center border rounded-xl p-4 shadow-sm bg-white"
              >
                <img
                  src={`${baseURL}${item.image}`}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-xl shadow-md"
                />
                <div className="flex-1 w-full">
                  <div className="flex justify-between">
                    <h4 className="text-lg font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">Stock: {item.stock}</p>
                  </div>
                  <p className="text-gray-700 mb-2">Price: ₹{item.price}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <button
                      onClick={() =>
                        handleQuantityChange(item._id, item.quantity - 1)
                      }
                      className="px-3 py-1 bg-gray-200 rounded text-lg"
                    >
                      -
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button
                      onClick={() =>
                        item.quantity < item.stock
                          ? handleQuantityChange(item._id, item.quantity + 1)
                          : toast.warning("Reached max stock")
                      }
                      className="px-3 py-1 bg-gray-200 rounded text-lg"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total and Checkout */}
          <div className="mt-8 border-t pt-4 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xl font-semibold mb-4 sm:mb-0">
              Total: ₹{totalAmount}
            </p>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
