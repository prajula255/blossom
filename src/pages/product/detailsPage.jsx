import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import FooterEg from "../../components/footer";

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

function FlowerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const flower = flowers.find((f) => f.id === parseInt(id));
  const [deliveryDate, setDeliveryDate] = useState(getDeliveryDate());

  function getDeliveryDate() {
    const today = new Date();
    today.setDate(today.getDate() + 3);
    return today.toISOString().split("T")[0];
  }

  const handleDateChange = (event) => {
    setDeliveryDate(event.target.value);
  };

  if (!flower) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Flower not found
      </h2>
    );
  }

  return (
    <div style={{ padding: "24px", textAlign: "center" }}>
      <img
        src={flower.image}
        alt={flower.name}
        style={{
          width: "400px",
          height: "400px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <h2>{flower.name}</h2>

      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
        Category: {flower.category}
      </p>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        Price: Rs.{flower.price}
      </p>

      <br />
      <br />
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
        }}
      >
        Go Back
      </button>

      <FooterEg />
    </div>
  );
}

export default FlowerDetails;
