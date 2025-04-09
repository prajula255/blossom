import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterEg from "../../components/footer";
import {
  getWishlistAPI,
  addToWishlistAPI,
  removeFromWishlistAPI,
} from "../../../api_services/allAPIs/wishlistAPI";

function Wishlist() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await getWishlistAPI();
        if (response && response.data) {
          console.log(response.data);

          setWishlist(response.data);
        } else {
          console.error("Invalid API response:", response);
        }
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    fetchWishlist();
  }, []);

  const removeFromWishlist = async (flowerId) => {
    try {
      await removeFromWishlistAPI(flowerId);
      setWishlist((prev) => prev.filter((item) => item._id !== flowerId));
      toast.info("Removed from wishlist!");
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.content}>
        <h2 style={styles.heading}>Wishlist</h2>
        {wishlist.length > 0 ? (
          <div style={styles.row}>
            {wishlist.map((flower) => (
              <div key={flower._id} style={styles.card}>
                <div
                  style={styles.imageContainer}
                  onClick={() => navigate(`/flowerdetails/${flower._id}`)}
                >
                  <img
                    src={`http://localhost:3001${flower.image}`}
                    alt={flower.name}
                    style={styles.image}
                  />
                </div>

                <div style={styles.details}>
                  <span style={styles.name}>{flower.name}</span>
                  <span style={styles.price}>Rs. {flower.price}</span>

                  {/* <button
                    style={styles.addButton}
                    onClick={() => handleAddToWishlist(flower)}
                  >
                    Add to Wishlist
                  </button> */}

                  <button
                    style={styles.removeButton}
                    onClick={() => removeFromWishlist(flower._id)}
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
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  content: { width: "80%", maxWidth: "1000px", textAlign: "center" },
  heading: { fontSize: "24px", fontWeight: "bold", marginBottom: "20px" },
  row: { display: "flex", flexWrap: "wrap", justifyContent: "center" },
  card: {
    width: "200px",
    margin: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
  },
  imageContainer: { cursor: "pointer" },
  image: {
    width: "100%",
    height: "180px", // slightly taller for better viewing
    objectFit: "cover",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  },
  details: { marginTop: "10px" },
  name: { display: "block", fontWeight: "bold" },
  price: { color: "green", fontSize: "16px" },
  addButton: {
    marginTop: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "5px",
  },
  removeButton: {
    marginTop: "10px",
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Wishlist;
