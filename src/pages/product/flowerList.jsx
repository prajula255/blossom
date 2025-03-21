import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterEg from "../../components/footer";

function FlowersList() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [searchQuery, setSearchQuery] = useState(""); // Search input state

  const flowers = [
    {
      id: 1,
      category: "Bouquet",
      name: "Wild Flower",
      price: 430,
      image: "/wi.jpg",
    },
    {
      id: 2,
      category: "Bouquet",
      name: "Lilie Orchid",
      price: 450,
      image: "/liliorchid.jpg",
    },
    {
      id: 3,
      category: "Bouquet",
      name: "Tulips Bouquet",
      price: 500,
      image: "/tul.jpg",
    },
    {
      id: 4,
      category: "Bouquet",
      name: "White Rose",
      price: 850,
      image: "/white.jpg",
    },
    {
      id: 5,
      category: "Flower",
      name: "Red Rose",
      price: 50,
      image: "/rosef.jpg",
    },
    {
      id: 6,
      category: "Flower",
      name: "Dried Flower",
      price: 690,
      image: "/driedflo.jpg",
    },
    {
      id: 7,
      category: "Bouquet",
      name: "Pink Money",
      price: 250,
      image: "/pink.jpg",
    },
    {
      id: 8,
      category: "Flower",
      name: "Tulip Lavender",
      price: 550,
      image: "/tulav.jpg",
    },
    {
      id: 9,
      category: "Flower",
      name: "Dianthus barbatus",
      price: 150,
      image: "/purple.jpg",
    },
    {
      id: 10,
      category: "Bouquet",
      name: "Violet Dalia",
      price: 550,
      image: "/vilot.jpg",
    },
    {
      id: 11,
      category: "Flower",
      name: "Marigold",
      price: 200,
      image: "/mari.jpg",
    },
    {
      id: 12,
      category: "Bouquet",
      name: "Carnation flower",
      price: 700,
      image: "/carnation.jpg",
    },
  ];

  function getDefaultDate() {
    const today = new Date();
    today.setDate(today.getDate() + 3);
    return today.toISOString().split("T")[0];
  }

  const addToCart = (flower, e) => {
    e.stopPropagation();
    let updatedCart = [...cart];
    const existingItem = updatedCart.find((item) => item.id === flower.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({ ...flower, quantity: 1 });
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));

    toast.success(`${flower.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  // Filter flowers based on search query
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

                  <div
                    style={styles.cartIcon}
                    onClick={(e) => addToCart(flower, e)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      style={{ width: "24px", height: "24px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </div>
                </div>
                <div style={styles.details}>
                  <span style={styles.category}>{flower.category}</span>
                  <span style={styles.name}>{flower.name}</span>
                  <span style={styles.price}>Rs. {flower.price}</span>
                  <span style={styles.deliveryDate}>
                    Delivery Date: {getDefaultDate()}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p>No flowers found.</p>
          )}
        </div>
      </div>

      {/* Toast Notification Container */}
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
    textAlign: "center",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "#fff",
    borderRadius: "10px",
    padding: "16px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    cursor: "pointer",
    flex: "1 1 250px",
    maxWidth: "250px",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "260px",
    overflow: "hidden",
    borderRadius: "8px",
    backgroundColor: "#f8f8f8",
  },
  image: { width: "100%", height: "100%", objectFit: "cover" },

  cartIcon: {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    cursor: "pointer",
    backgroundColor: "white",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.3s ease, transform 0.2s ease",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    color: "black",
  },

  details: { marginTop: "10px" },
  category: { fontSize: "14px", color: "#555" },
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
  deliveryDate: {
    fontSize: "14px",
    color: "#4CAF50",
    marginTop: "5px",
    display: "block",
  },
  searchInput: {
    width: "80%",
    maxWidth: "400px",
    padding: "10px",
    marginBottom: "20px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
};

export default FlowersList;
