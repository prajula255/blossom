import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FooterEg from "../../components/footer";

function TrackOrder() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const getOrderStatus = (status) => {
    switch (status) {
      case "pending":
        return "🕒 Pending";
      case "shipped":
        return "🚚 Shipped";
      case "delivered":
        return "✅ Delivered";
      default:
        return "❓ Unknown";
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.content}>
        <h2 style={styles.heading}>Track Your Order</h2>

        {orders.length > 0 ? (
          <div style={styles.orderList}>
            {orders.map((order, index) => (
              <div key={index} style={styles.orderCard}>
                <p>
                  <strong>Order ID:</strong> {order.id}
                </p>
                <p>
                  <strong>Item:</strong> {order.name}
                </p>
                <p>
                  <strong>Price:</strong> Rs. {order.price}
                </p>
                <p>
                  <strong>Delivery Date:</strong> {order.deliveryDate}
                </p>
                <p>
                  <strong>Status:</strong> {getOrderStatus(order.status)}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No orders found.</p>
        )}

        <button style={styles.backButton} onClick={() => navigate("/shop")}>
          Go Back to Shop
        </button>
      </div>

      <FooterEg />
    </div>
  );
}

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  content: {
    flex: "1",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "24px",
    textAlign: "center",
  },
  heading: {
    fontWeight: "bold",
    marginBottom: "16px",
    fontSize: "24px",
  },
  orderList: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  orderCard: {
    background: "#fff",
    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  },
  backButton: {
    marginTop: "20px",
    padding: "10px 15px",
    backgroundColor: "#ff6f61",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default TrackOrder;
