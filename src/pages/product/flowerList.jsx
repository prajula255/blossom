import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FooterEg from "../../components/footer";

function FlowersList() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

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
      price: 450,
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

  const getDeliveryDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 3);
    return today.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px" }}>
      <h2
        style={{
          fontWeight: "bold",
          marginBottom: "16px",
          fontSize: "24px",
          textAlign: "left",
        }}
      >
        Shop
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {flowers.map((flower) => (
          <div
            key={flower.id}
            style={{
              position: "relative",
              textAlign: "center",
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/flowerdetails/${flower.id}`)}
          >
            <img
              src={flower.image}
              alt={flower.name}
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <div style={{ marginTop: "10px" }}>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                {flower.category} <br /> {flower.name} <br /> Rs.{flower.price}
              </span>
              <br />
              <small style={{ fontSize: "14px", color: "gray" }}>
                Delivery by: {getDeliveryDate()}
              </small>
            </div>
          </div>
        ))}
      </div>
      <FooterEg />
    </div>
  );
}

export default FlowersList;
