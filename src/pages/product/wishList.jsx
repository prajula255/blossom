import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterEg from "../../components/footer";

function Wishlist() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (flower) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== flower.id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    toast.info(`${flower.name} removed from wishlist!`);
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.content}>
        <h2 style={styles.heading}>Wishlist</h2>
        {wishlist.length > 0 ? (
          <div style={styles.row}>
            {wishlist.map((flower) => (
              <div key={flower.id} style={styles.card}>
                <div
                  style={styles.imageContainer}
                  onClick={() => navigate(`/flowerdetails/${flower.id}`)}
                >
                  <img
                    src={flower.image}
                    alt={flower.name}
                    style={styles.image}
                  />
                </div>
                <div style={styles.details}>
                  <span style={styles.name}>{flower.name}</span>
                  <span style={styles.price}>Rs. {flower.price}</span>
                  <button
                    style={styles.removeButton}
                    // onClick={() => removeFromWishlist(flower)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>
      <ToastContainer />
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
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "24px",
    textAlign: "center",
  },
  heading: {
    fontWeight: "bold",
    marginBottom: "16px",
    fontSize: "24px",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    background: "#fff",
    borderRadius: "10px",
    padding: "16px",
    width: "220px",
    height: "300px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: "200px",
    height: "200px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  details: {
    marginTop: "10px",
    textAlign: "center",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
    display: "block",
    marginTop: "5px",
  },
  price: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#E91E63",
    marginTop: "5px",
  },
  removeButton: {
    background: "red",
    color: "white",
    padding: "6px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Wishlist;
