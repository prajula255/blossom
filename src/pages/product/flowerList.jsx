import { useNavigate } from "react-router-dom";
import FooterEg from "../../components/footer";

function FlowersList() {
  const navigate = useNavigate();

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

  return (
    <div style={styles.pageContainer}>
      <div style={styles.content}>
        <h2 style={styles.heading}>Shop</h2>
        <div style={styles.row}>
          {flowers.map((flower) => (
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
                <span style={styles.category}>{flower.category}</span>
                <span style={styles.name}>{flower.name}</span>
                <span style={styles.price}>Rs. {flower.price}</span>
                <span style={styles.deliveryDate}>
                  Delivery Date: {getDefaultDate()}
                </span>
              </div>
            </div>
          ))}
        </div>
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
};

export default FlowersList;
