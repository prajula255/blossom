import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterEg from "../../components/footer";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import axios from "axios";
import { baseURL } from "../../../api_services/baseURL";
import { addToWishlistAPI } from "../../../api_services/allAPIs/wishlistAPI";
import { addToCartAPI } from "../../../api_services/allAPIs/cartAPI";

function FlowersList() {
  const navigate = useNavigate();

  const [flowers, setFlowers] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchFlowers = async () => {
      try {
        const response = await axios.get(`${baseURL}/getFlowers`);
        setFlowers(response.data.flowers);
      } catch (error) {
        console.error("Error fetching flowers:", error);
        toast.error("Failed to load flowers");
      }
    };

    fetchFlowers();
  }, []);

  const addToCart = async (flower, e) => {
    e.stopPropagation();
    if (flower.stock <= 0) return;
  
    try {
      const product = {
        flowerId: flower._id,
        name: flower.name,
        image: flower.image[0], // backend expects a single image path
        price: flower.price,
        quantity: 1,
        stock: flower.stock,
      };
  
      const res = await addToCartAPI(product);
  
      if (res.status === 201 || res.status === 200) {
        toast.success(`${flower.name} added to cart!`);
      }
    } catch (error) {
      console.error("Add to cart failed:", error);
      toast.error("Failed to add to cart. Make sure you're logged in.");
    }
  };
  
  const handleAddToWishlist = async (flower) => {
    // const isInWishlist = wishlist.find((item) => item.name === flower.name);

    // if (isInWishlist) {
    //   toast.info("Already in wishlist!");
    //   return;
    // }

    try {
      const userId = localStorage.getItem("userId");
      console.log(userId);

      const response = await addToWishlistAPI({
        userId,
        flowerId: flower._id,
        name: flower.name,
        image: flower.image[0],
        price: flower.price,
      });

      if (response.status === 201) {
        setWishlist((prev) => [...prev, response.data.item]);
        toast.success("Added to wishlist!");
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      toast.error("Failed to add to wishlist.");
    }
  };

  // const toggleWishlist = (flower, e) => {
  //   e.stopPropagation();
  //   const updated = [...wishlist];
  //   const exists = updated.find((item) => item._id === flower._id);

  //   if (exists) {
  //     const filtered = updated.filter((item) => item._id !== flower._id);
  //     setWishlist(filtered);
  //     localStorage.setItem("wishlist", JSON.stringify(filtered));
  //     toast.info(`${flower.name} removed from wishlist`);
  //   } else {
  //     updated.push(flower);
  //     setWishlist(updated);
  //     localStorage.setItem("wishlist", JSON.stringify(updated));
  //     toast.success(`${flower.name} added to wishlist`);
  //   }
  // };

  const filteredFlowers = flowers.filter(
    (flower) =>
      flower.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      flower.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.pageContainer}>
      <div style={styles.content}>
        <h2 style={styles.heading}>Shop</h2>

        <input
          type="text"
          placeholder="Search by name or category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchInput}
        />

        <div style={styles.row}>
          {filteredFlowers.length > 0 ? (
            filteredFlowers.map((flower) => (
              <div key={flower._id} style={styles.card}>
                <div
                  style={styles.imageContainer}
                  // onClick={() => navigate(`/flowerdetails/${flower._id}`)}
                >
                  <img
                    src={`${baseURL}${flower.image[0]}`}
                    alt={flower.name}
                    style={styles.image}
                  />

                  {/* Wishlist Icon */}
                  <div
                    style={styles.wishlistIcon}
                    onClick={(e) => handleAddToWishlist(flower)}
                  >
                    <FaHeart
                      size={22}
                      color={
                        wishlist.some((item) => item._id === flower._id)
                          ? "white"
                          : "white"
                      }
                    />
                  </div>
                </div>

                <p style={styles.name}>{flower.name}</p>
                <p>Price: ₹{flower.price}</p>
                <p>Stock: {flower.stock > 0 ? flower.stock : "Out of stock"}</p>

                <button
                  onClick={(e) => addToCart(flower, e)}
                  style={{
                    ...styles.cartButton,
                    backgroundColor: flower.stock > 0 ? "#28a745" : "#ccc",
                    cursor: flower.stock > 0 ? "pointer" : "not-allowed",
                  }}
                  disabled={flower.stock <= 0}
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p>No flowers found.</p>
          )}
        </div>
      </div>
      <ToastContainer />
      <FooterEg />
    </div>
  );
}

const styles = {
  pageContainer: {
    padding: "20px",
    background: "#f9f9f9",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    fontSize: "28px",
    marginBottom: "20px",
  },
  searchInput: {
    display: "block",
    margin: "0 auto 20px auto",
    padding: "10px",
    width: "60%",
    fontSize: "16px",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    width: "220px",
    padding: "15px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    position: "relative",
  },
  imageContainer: {
    position: "relative",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  wishlistIcon: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "#00000066",
    padding: "5px",
    borderRadius: "50%",
  },
  name: {
    fontWeight: "bold",
    marginTop: "10px",
  },
  cartButton: {
    marginTop: "10px",
    padding: "8px 12px",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
};

export default FlowersList;
