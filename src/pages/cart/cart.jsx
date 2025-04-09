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
    return (
      <p
        style={{ textAlign: "center", fontSize: "1.125rem", fontWeight: "500" }}
      >
        Loading cart...
      </p>
    );

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "24px 16px" }}>
      <h2
        style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "24px" }}
      >
        Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p style={{ color: "#4B5563" }}>No items in cart.</p>
      ) : (
        <>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            {cartItems.map((item) => (
              <div
                key={item._id}
                style={{
                  display: "flex",
                  flexDirection: window.innerWidth < 768 ? "column" : "row",
                  gap: "16px",
                  alignItems: "center",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  padding: "16px",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                  backgroundColor: "#fff",
                }}
              >
                <img
                  src={`${baseURL}${item.image}`}
                  alt={item.name}
                  style={{
                    width: "112px",
                    height: "112px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    border: "1px solid #ddd",
                  }}
                />
                <div style={{ flex: 1, width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <h4 style={{ fontSize: "1.125rem", fontWeight: "600" }}>
                      {item.name}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "#6B7280",
                        display: "none",
                      }}
                    >
                      Stock: {item.stock}
                    </p>
                  </div>
                  <p style={{ color: "#374151", marginBottom: "8px" }}>
                    Price: ₹{item.price}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "12px",
                    }}
                  >
                    <button
                      onClick={() =>
                        handleQuantityChange(item._id, item.quantity - 1)
                      }
                      style={{
                        padding: "4px 12px",
                        backgroundColor: "#e5e7eb",
                        borderRadius: "6px",
                        fontSize: "1.125rem",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      -
                    </button>
                    <span style={{ fontWeight: "600" }}>{item.quantity}</span>
                    <button
                      onClick={() =>
                        item.quantity < item.stock
                          ? handleQuantityChange(item._id, item.quantity + 1)
                          : toast.warning("Reached max stock")
                      }
                      style={{
                        padding: "4px 12px",
                        backgroundColor: "#e5e7eb",
                        borderRadius: "6px",
                        fontSize: "1.125rem",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemove(item._id)}
                    style={{
                      fontSize: "0.875rem",
                      backgroundColor: "#EF4444",
                      color: "#fff",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total and Checkout */}
          <div
            style={{
              marginTop: "32px",
              paddingTop: "16px",
              borderTop: "1px solid #e5e7eb",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontSize: "1.25rem", fontWeight: "600" }}>
              Total: ₹{totalAmount}
            </p>
            <button
              onClick={() => navigate("/checkout")}
              style={{
                backgroundColor: "#16A34A",
                color: "#fff",
                padding: "10px 24px",
                borderRadius: "6px",
                fontSize: "1rem",
                cursor: "pointer",
                border: "none",
              }}
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
