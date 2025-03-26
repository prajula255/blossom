// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import FooterEg from "../../components/footer";

// function FlowersList() {
//   const navigate = useNavigate();

//   const [cart, setCart] = useState(
//     JSON.parse(localStorage.getItem("cart")) || []
//   );
//   const [wishlist, setWishlist] = useState(
//     JSON.parse(localStorage.getItem("wishlist")) || []
//   );
//   const [searchQuery, setSearchQuery] = useState("");

//   const flowers = [
//     {
//       id: 1,
//       category: "Bouquet",
//       name: "Wild Flower",
//       price: 430,
//       image: "/wi.jpg",
//       available: true,
//     },
//     {
//       id: 2,
//       category: "Bouquet",
//       name: "Lilie Orchid",
//       price: 450,
//       image: "/liliorchid.jpg",
//       available: false,
//     },
//     {
//       id: 3,
//       category: "Bouquet",
//       name: "Tulips Bouquet",
//       price: 500,
//       image: "/tul.jpg",
//       available: true,
//     },
//     {
//       id: 4,
//       category: "Bouquet",
//       name: "White Rose",
//       price: 850,
//       image: "/white.jpg",
//       available: true,
//     },
//     {
//       id: 5,
//       category: "Flower",
//       name: "Red Rose",
//       price: 50,
//       image: "/rosef.jpg",
//       available: false,
//     },
//     {
//       id: 6,
//       category: "Flower",
//       name: "Dried Flower",
//       price: 690,
//       image: "/driedflo.jpg",
//       available: true,
//     },
//     {
//       id: 7,
//       category: "Bouquet",
//       name: "Pink Money",
//       price: 250,
//       image: "/pink.jpg",
//       available: false,
//     },
//     {
//       id: 8,
//       category: "Flower",
//       name: "Tulip Lavender",
//       price: 550,
//       image: "/tulav.jpg",
//       available: true,
//     },
//     {
//       id: 9,
//       category: "Flower",
//       name: "Dianthus barbatus",
//       price: 150,
//       image: "/purple.jpg",
//       available: false,
//     },
//     {
//       id: 10,
//       category: "Bouquet",
//       name: "Violet Dalia",
//       price: 550,
//       image: "/vilot.jpg",
//       available: true,
//     },
//     {
//       id: 11,
//       category: "Flower",
//       name: "Marigold",
//       price: 200,
//       image: "/mari.jpg",
//       available: true,
//     },
//     {
//       id: 12,
//       category: "Bouquet",
//       name: "Carnation flower",
//       price: 700,
//       image: "/carnation.jpg",
//       available: false,
//     },
//   ];

//   function getDefaultDate() {
//     const today = new Date();
//     today.setDate(today.getDate() + 3);
//     return today.toISOString().split("T")[0];
//   }

//   const addToCart = (flower, e) => {
//     e.stopPropagation();
//     let updatedCart = [...cart];
//     const existingItem = updatedCart.find((item) => item.id === flower.id);

//     if (existingItem) {
//       existingItem.quantity += 1;
//     } else {
//       updatedCart.push({ ...flower, quantity: 1 });
//     }

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

//                   <div
//                     style={styles.wishlistIcon}
//                     onClick={(e) => toggleWishlist(flower, e)}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill={
//                         wishlist.some((item) => item.id === flower.id)
//                           ? "red"
//                           : "none"
//                       }
//                       viewBox="0 0 24 24"
//                       strokeWidth={1.5}
//                       stroke="currentColor"
//                       width="24px"
//                       height="24px"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
//                       />
//                     </svg>
//                   </div>

//                   <div
//                     style={styles.cartIcon}
//                     onClick={(e) => addToCart(flower, e)}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={1.5}
//                       stroke="currentColor"
//                       style={{ width: "24px", height: "24px" }}
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//                 <div style={styles.details}>
//                   <span style={styles.category}>{flower.category}</span>
//                   <span style={styles.name}>{flower.name}</span>
//                   <span style={styles.price}>Rs. {flower.price}</span>
//                   <span style={styles.deliveryDate}>
//                     Delivery Date: {getDefaultDate()}
//                   </span>

//                   <div style={styles.rating}>
//                     {Array.from({ length: 5 }, (_, index) => (
//                       <svg
//                         key={index}
//                         width="20"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill={
//                           index < Math.round(flower.rating)
//                             ? "#FFD700"
//                             : "#DDDDDD"
//                         }
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                       </svg>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No flowers found.</p>
//           )}
//         </div>
//       </div>

//       {/* Toast Notification Container */}
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
//   heading: {
//     fontWeight: "bold",
//     marginBottom: "16px",
//     fontSize: "24px",
//   },
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
//     boxSizing: "border-box",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//   },
//   wishlistIcon: {
//     position: "absolute",
//     top: "10px",
//     right: "10px",
//     cursor: "pointer",
//     backgroundColor: "white",
//     borderRadius: "50%",
//     width: "40px",
//     height: "40px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     transition: "background 0.3s ease, transform 0.2s ease",
//     boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
//     zIndex: 2,
//   },
//   cartIcon: {
//     position: "absolute",
//     bottom: "10px",
//     right: "10px",
//     cursor: "pointer",
//     backgroundColor: "white",
//     borderRadius: "50%",
//     width: "40px",
//     height: "40px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     transition: "background 0.3s ease, transform 0.2s ease",
//     boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
//   },
//   details: {
//     marginTop: "10px",
//     textAlign: "center",
//   },
//   category: {
//     fontSize: "14px",
//     color: "#555",
//   },
//   name: {
//     fontSize: "18px",
//     fontWeight: "bold",
//     display: "block",
//     marginTop: "5px",
//   },
//   price: {
//     fontSize: "16px",
//     fontWeight: "bold",
//     color: "#E91E63",
//     marginTop: "5px",
//   },
//   deliveryDate: {
//     fontSize: "14px",
//     color: "#4CAF50",
//     marginTop: "5px",
//     display: "block",
//   },
// };

// export default FlowersList;

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterEg from "../../components/footer";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

function FlowersList() {
  const navigate = useNavigate();

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const [searchQuery, setSearchQuery] = useState("");

  const initialFlowers = [
    {
      id: 1,
      category: "Bouquet",
      name: "Wild Flower",
      price: 430,
      image: "/wi.jpg",
      stock: 10,
    },
    {
      id: 2,
      category: "Bouquet",
      name: "Lilie Orchid",
      price: 450,
      image: "/liliorchid.jpg",
      stock: 0,
    },
    {
      id: 3,
      category: "Bouquet",
      name: "Tulips Bouquet",
      price: 500,
      image: "/tul.jpg",
      stock: 5,
    },
    {
      id: 4,
      category: "Bouquet",
      name: "White Rose",
      price: 850,
      image: "/white.jpg",
      stock: 8,
    },
    {
      id: 5,
      category: "Flower",
      name: "Red Rose",
      price: 50,
      image: "/rosef.jpg",
      stock: 0,
    },
    {
      id: 6,
      category: "Flower",
      name: "Dried Flower",
      price: 690,
      image: "/driedflo.jpg",
      stock: 12,
    },
    {
      id: 7,
      category: "Bouquet",
      name: "Pink Money",
      price: 250,
      image: "/pink.jpg",
      stock: 3,
    },
    {
      id: 8,
      category: "Flower",
      name: "Tulip Lavender",
      price: 550,
      image: "/tulav.jpg",
      stock: 0,
    },
    {
      id: 9,
      category: "Flower",
      name: "Dianthus barbatus",
      price: 150,
      image: "/purple.jpg",
      stock: 19,
    },
    {
      id: 10,
      category: "Bouquet",
      name: "Violet Dalia",
      price: 550,
      image: "/vilot.jpg",
      stock: 5,
    },
    {
      id: 11,
      category: "Flower",
      name: "Marigold",
      price: 200,
      image: "/mari.jpg",
      stock: 0,
    },
    {
      id: 12,
      category: "Bouquet",
      name: "Carnation flower",
      price: 700,
      image: "/carnation.jpg",
      stock: 3,
    },
  ];

  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    // Load flowers from localStorage or use initial values
    const storedFlowers = JSON.parse(localStorage.getItem("flowers"));
    if (storedFlowers) {
      setFlowers(storedFlowers);
    } else {
      setFlowers(initialFlowers);
      localStorage.setItem("flowers", JSON.stringify(initialFlowers));
    }
  }, []);

  const getDefaultDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 3);
    return today.toISOString().split("T")[0];
  };

  const addToCart = (flower, e) => {
    e.stopPropagation();
    if (flower.stock <= 0) return; // Prevent adding out-of-stock items

    let updatedCart = [...cart];
    const existingItem = updatedCart.find((item) => item.id === flower.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({ ...flower, quantity: 1 });
    }

    // Update stock in the flowers state
    const updatedFlowers = flowers.map((f) => {
      if (f.id === flower.id) {
        return { ...f, stock: f.stock - 1 }; // Decrement stock
      }
      return f;
    });

    setFlowers(updatedFlowers);
    localStorage.setItem("flowers", JSON.stringify(updatedFlowers)); // Update localStorage
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));

    toast.success(`${flower.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
    });
  };

  const toggleWishlist = (flower, e) => {
    e.stopPropagation();
    let updatedWishlist = [...wishlist];
    const index = updatedWishlist.findIndex((item) => item.id === flower.id);

    if (index !== -1) {
      updatedWishlist.splice(index, 1);
      toast.info(`${flower.name} removed from wishlist!`);
    } else {
      updatedWishlist.push(flower);
      toast.success(`${flower.name} added to wishlist!`);
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
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

                  {/* Wishlist Icon */}
                  <div
                    style={styles.wishlistIcon}
                    onClick={(e) => toggleWishlist(flower, e)}
                  >
                    <FaHeart
                      size={22}
                      color={
                        wishlist.some((item) => item.id === flower.id)
                          ? "red"
                          : "white"
                      }
                    />
                  </div>

                  {/* Cart Icon (Disabled if Out of Stock) */}
                  {flower.stock > 0 ? (
                    <div
                      style={styles.cartIcon}
                      onClick={(e) => addToCart(flower, e)}
                    >
                      <FaShoppingCart size={22} color="black" />
                    </div>
                  ) : (
                    <span style={styles.outOfStockLabel}>Out of Stock</span>
                  )}
                </div>

                <div style={styles.details}>
                  <b>
                    <span style={styles.category}>{flower.category}</span>
                  </b>
                  <br />
                  <span style={styles.name}>{flower.name}</span>
                  <br />
                  <span style={styles.price}>Rs. {flower.price}</span>
                  <br />
                  <span style={styles.deliveryDate}>
                    Delivery Date: {getDefaultDate()}
                  </span>
                  <br />

                  <span
                    style={{
                      fontSize: "14px",
                      color: flower.stock > 0 ? "#4CAF50" : "red",
                    }}
                  >
                    {flower.stock > 0
                      ? `In Stock: ${flower.stock}`
                      : "Out of Stock"}
                  </span>
                </div>
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
  heading: { fontWeight: "bold", marginBottom: "16px", fontSize: "24px" },
  searchInput: {
    width: "80%",
    maxWidth: "400px",
    padding: "10px",
    marginBottom: "20px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "5px",
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
    height: "330px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    position: "relative",
    width: "200px",
    height: "260px",
    overflow: "hidden",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: "100%", height: "100%", objectFit: "cover" },
  wishlistIcon: {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
  },
  cartIcon: {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    cursor: "pointer",
  },
  outOfStockLabel: {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    backgroundColor: "red",
    color: "white",
    padding: "5px",
    fontSize: "12px",
    borderRadius: "5px",
  },
};

export default FlowersList;
