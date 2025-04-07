// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import FooterEg from "../../components/footer";
// import { FaShoppingCart, FaHeart, FaStar } from "react-icons/fa";

// function FlowersList() {
//   const navigate = useNavigate();

//   const [cart, setCart] = useState(
//     JSON.parse(localStorage.getItem("cart")) || []
//   );
//   const [wishlist, setWishlist] = useState(
//     JSON.parse(localStorage.getItem("wishlist")) || []
//   );
//   const [searchQuery, setSearchQuery] = useState("");

//   const initialFlowers = [
//     {
//       id: 1,
//       category: "Bouquet",
//       name: "Wild Flower",
//       price: 430,
//       image: "/wi.jpg",
//       stock: 10,
//     },
//     {
//       id: 2,
//       category: "Bouquet",
//       name: "Lilie Orchid",
//       price: 450,
//       image: "/liliorchid.jpg",
//       stock: 0,
//     },
//     {
//       id: 3,
//       category: "Bouquet",
//       name: "Tulips Bouquet",
//       price: 500,
//       image: "/tul.jpg",
//       stock: 5,
//     },
//     {
//       id: 4,
//       category: "Bouquet",
//       name: "White Rose",
//       price: 850,
//       image: "/white.jpg",
//       stock: 8,
//     },
//     {
//       id: 5,
//       category: "Flower",
//       name: "Red Rose",
//       price: 50,
//       image: "/rosef.jpg",
//       stock: 0,
//     },
//     {
//       id: 6,
//       category: "Flower",
//       name: "Dried Flower",
//       price: 690,
//       image: "/driedflo.jpg",
//       stock: 12,
//     },
//     {
//       id: 7,
//       category: "Bouquet",
//       name: "Pink Money",
//       price: 250,
//       image: "/pink.jpg",
//       stock: 3,
//     },
//     {
//       id: 8,
//       category: "Flower",
//       name: "Tulip Lavender",
//       price: 550,
//       image: "/tulav.jpg",
//       stock: 0,
//     },
//     {
//       id: 9,
//       category: "Flower",
//       name: "Dianthus barbatus",
//       price: 150,
//       image: "/purple.jpg",
//       stock: 19,
//     },
//     {
//       id: 10,
//       category: "Bouquet",
//       name: "Violet Dalia",
//       price: 550,
//       image: "/vilot.jpg",
//       stock: 5,
//     },
//     {
//       id: 11,
//       category: "Flower",
//       name: "Marigold",
//       price: 200,
//       image: "/mari.jpg",
//       stock: 0,
//     },
//     {
//       id: 12,
//       category: "Bouquet",
//       name: "Carnation flower",
//       price: 700,
//       image: "/carnation.jpg",
//       stock: 3,
//     },
//   ];

//   const [flowers, setFlowers] = useState([]);

//   useEffect(() => {
//     // Load flowers from localStorage or use initial values
//     const storedFlowers = JSON.parse(localStorage.getItem("flowers"));
//     if (storedFlowers) {
//       setFlowers(storedFlowers);
//     } else {
//       setFlowers(initialFlowers);
//       localStorage.setItem("flowers", JSON.stringify(initialFlowers));
//     }
//   }, []);

//   const getDefaultDate = () => {
//     const today = new Date();
//     today.setDate(today.getDate() + 3);
//     return today.toISOString().split("T")[0];
//   };

//   const addToCart = (flower, e) => {
//     e.stopPropagation();
//     if (flower.stock <= 0) return; // Prevent adding out-of-stock items

//     let updatedCart = [...cart];
//     const existingItem = updatedCart.find((item) => item.id === flower.id);

//     if (existingItem) {
//       existingItem.quantity += 1;
//     } else {
//       updatedCart.push({ ...flower, quantity: 1 });
//     }

//     // Update stock in the flowers state
//     const updatedFlowers = flowers.map((f) => {
//       if (f.id === flower.id) {
//         return { ...f, stock: f.stock - 1 }; // Decrement stock
//       }
//       return f;
//     });

//     setFlowers(updatedFlowers);
//     localStorage.setItem("flowers", JSON.stringify(updatedFlowers)); // Update localStorage
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     window.dispatchEvent(new Event("cartUpdated"));

//     toast.success(`${flower.name} added to cart!`, {
//       position: "top-right",
//       autoClose: 2000,
//       theme: "colored",
//     });
//   };

//   const toggleWishlist = (flower, e) => {
//     e.stopPropagation();
//     let updatedWishlist = [...wishlist];
//     const index = updatedWishlist.findIndex((item) => item.id === flower.id);

//     if (index !== -1) {
//       updatedWishlist.splice(index, 1);
//       toast.info(`${flower.name} removed from wishlist!`);
//     } else {
//       updatedWishlist.push(flower);
//       toast.success(`${flower.name} added to wishlist!`);
//     }

//     setWishlist(updatedWishlist);
//     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
//   };

//   const filteredFlowers = flowers.filter(
//     (flower) =>
//       flower.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       flower.category.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div style={styles.pageContainer}>
//       <div style={styles.content}>
//         <h2 style={styles.heading}>Shop</h2>

//         <input
//           type="text"
//           placeholder="Search by name or category..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           style={styles.searchInput}
//         />

//         <div style={styles.row}>
//           {filteredFlowers.length > 0 ? (
//             filteredFlowers.map((flower) => (
//               <div key={flower.id} style={styles.card}>
//                 <div
//                   style={styles.imageContainer}
//                   onClick={() => navigate(`/flowerdetails/${flower.id}`)}
//                 >
//                   <img
//                     src={flower.image}
//                     alt={flower.name}
//                     style={styles.image}
//                   />

//                   {/* Wishlist Icon */}
//                   <div
//                     style={styles.wishlistIcon}
//                     onClick={(e) => toggleWishlist(flower, e)}
//                   >
//                     <FaHeart
//                       size={22}
//                       color={
//                         wishlist.some((item) => item.id === flower.id)
//                           ? "red"
//                           : "white"
//                       }
//                     />
//                   </div>

//                   {/* Cart Icon (Disabled if Out of Stock) */}
//                   {flower.stock > 0 ? (
//                     <div
//                       style={styles.cartIcon}
//                       onClick={(e) => addToCart(flower, e)}
//                     >
//                       <FaShoppingCart size={22} color="white" />
//                     </div>
//                   ) : (
//                     <span style={styles.outOfStockLabel}>Out of Stock</span>
//                   )}
//                 </div>

//                 <div style={styles.details}>
//                   <b>
//                     <span style={styles.category}>{flower.category}</span>
//                   </b>
//                   <br />
//                   <span style={styles.name}>{flower.name}</span>
//                   <br />
//                   <span style={styles.price}>Rs. {flower.price}</span>
//                   <br />
//                   <span style={styles.deliveryDate}>
//                     Delivery Date: {getDefaultDate()}
//                   </span>
//                   {/* Rating Section */}
//                   <div style={styles.rating}>
//                     {[...Array(5)].map((_, index) => (
//                       <FaStar key={index} color={index < 4 ? "gold" : "#ddd"} />
//                     ))}
//                   </div>

//                   <br />
//                   {/* <span
//                     style={{
//                       fontSize: "14px",
//                       color: flower.stock > 0 ? "#4CAF50" : "red",
//                     }}
//                   >
//                     {flower.stock > 0
//                       ? `In Stock: ${flower.stock}`
//                       : "Out of Stock"}
//                   </span> */}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No flowers found.</p>
//           )}
//         </div>
//       </div>

//       <ToastContainer />
//       <FooterEg />
//     </div>
//   );
// }

// const styles = {
//   pageContainer: {
//     display: "flex",
//     flexDirection: "column",
//     minHeight: "100vh",
//   },
//   content: {
//     flex: "1",
//     maxWidth: "1200px",
//     margin: "0 auto",
//     padding: "24px",
//     textAlign: "center",
//   },
//   heading: { fontWeight: "bold", marginBottom: "16px", fontSize: "24px" },
//   searchInput: {
//     width: "80%",
//     maxWidth: "400px",
//     padding: "10px",
//     marginBottom: "20px",
//     fontSize: "16px",
//     border: "1px solid #ddd",
//     borderRadius: "5px",
//   },
//   row: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "20px",
//     justifyContent: "center",
//   },
//   card: {
//     background: "#fff",
//     borderRadius: "10px",
//     padding: "16px",
//     width: "220px",
//     height: "330px",
//     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//     cursor: "pointer",
//     textAlign: "center",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   imageContainer: {
//     position: "relative",
//     width: "200px",
//     height: "260px",
//     overflow: "hidden",
//     borderRadius: "8px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   image: { width: "100%", height: "100%", objectFit: "cover" },
//   wishlistIcon: {
//     position: "absolute",
//     top: "10px",
//     right: "10px",
//     cursor: "pointer",
//   },
//   cartIcon: {
//     position: "absolute",
//     bottom: "10px",
//     right: "10px",
//     cursor: "pointer",
//   },
//   outOfStockLabel: {
//     position: "absolute",
//     bottom: "10px",
//     right: "10px",
//     backgroundColor: "red",
//     color: "white",
//     padding: "5px",
//     fontSize: "12px",
//     borderRadius: "5px",
//   },
//   rating: {
//     display: "flex",
//     justifyContent: "center",
//     marginTop: "5px",
//     color: "gold",
//   },
// };

// export default FlowersList;


import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterEg from "../../components/footer";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import axios from "axios";
import { baseURL } from "../../../api_services/baseURL";

function FlowersList() {
  const navigate = useNavigate();

  const [flowers, setFlowers] = useState([]);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem("wishlist")) || []);
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

  const addToCart = (flower, e) => {
    e.stopPropagation();
    if (flower.stock <= 0) return;

    const updatedCart = [...cart];
    const existing = updatedCart.find((item) => item._id === flower._id);

    if (existing) {
      existing.quantity += 1;
    } else {
      updatedCart.push({ ...flower, quantity: 1 });
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success(`${flower.name} added to cart!`);
  };

  const toggleWishlist = (flower, e) => {
    e.stopPropagation();
    const updated = [...wishlist];
    const exists = updated.find((item) => item._id === flower._id);

    if (exists) {
      const filtered = updated.filter((item) => item._id !== flower._id);
      setWishlist(filtered);
      localStorage.setItem("wishlist", JSON.stringify(filtered));
      toast.info(`${flower.name} removed from wishlist`);
    } else {
      updated.push(flower);
      setWishlist(updated);
      localStorage.setItem("wishlist", JSON.stringify(updated));
      toast.success(`${flower.name} added to wishlist`);
    }
  };

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
                  onClick={() => navigate(`/flowerdetails/${flower._id}`)}
                >
                  <img
                    src={`${baseURL}${flower.image[0]}`}
                    alt={flower.name}
                    style={styles.image}
                  />

                  {/* Wishlist Icon */}
                  <div style={styles.wishlistIcon} onClick={(e) => toggleWishlist(flower, e)}>
                    <FaHeart
                      size={22}
                      color={wishlist.some((item) => item._id === flower._id) ? "red" : "white"}
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

// Your existing styles or updated styles go here
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
