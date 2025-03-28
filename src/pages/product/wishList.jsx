// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import FooterEg from "../../components/footer";

// function Wishlist() {
//   const navigate = useNavigate();
//   const [wishlist, setWishlist] = useState([]);

//   useEffect(() => {
//     const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     setWishlist(storedWishlist);
//   }, []);

//   const removeFromWishlist = (flower) => {
//     const updatedWishlist = wishlist.filter((item) => item.id !== flower.id);
//     setWishlist(updatedWishlist);
//     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

//     toast.info(`${flower.name} removed from wishlist!`);
//   };

//   return (
//     <div style={styles.pageContainer}>
//       <div style={styles.content}>
//         <h2 style={styles.heading}>Wishlist</h2>
//         {wishlist.length > 0 ? (
//           <div style={styles.row}>
//             {wishlist.map((flower) => (
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
//                 </div>
//                 <div style={styles.details}>
//                   <span style={styles.name}>{flower.name}</span>
//                   <span style={styles.price}>Rs. {flower.price}</span>
//                   <button
//                     style={styles.removeButton}
//                     // onClick={() => removeFromWishlist(flower)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>Your wishlist is empty.</p>
//         )}
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
//   heading: {
//     fontWeight: "bold",
//     marginBottom: "16px",
//     fontSize: "24px",
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
//     height: "300px",
//     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//     textAlign: "center",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   imageContainer: {
//     width: "200px",
//     height: "200px",
//     borderRadius: "8px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     overflow: "hidden",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//   },
//   details: {
//     marginTop: "10px",
//     textAlign: "center",
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
//   removeButton: {
//     background: "red",
//     color: "white",
//     padding: "6px 12px",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     marginTop: "10px",
//   },
// };

// export default Wishlist;


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

  const handleAddToWishlist = async (flower) => {
    try {
      const response = await addToWishlistAPI({
        name: flower.name,
        image: flower.image,
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

  const removeFromWishlist = async (flowerId) => {
    try {
      await removeFromWishlistAPI({ _id: flowerId }); 
      setWishlist((prev) => prev.filter((item) => item._id !== flowerId));
      toast.info("Removed from wishlist!");
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
    }
  };
  console.log("Rendering Wishlist:", wishlist);

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
                    src={flower.image}
                    alt={flower.name}
                    style={styles.image}
                  />
                </div>

                <div style={styles.details}>
                  <span style={styles.name}>{flower.name}</span>
                  <span style={styles.price}>Rs. {flower.price}</span>

                  <button
                    style={styles.addButton}
                    onClick={() => handleAddToWishlist(flower)}
                  >
                    Add to Wishlist
                  </button>

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
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
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