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
    description:
      "A charming bouquet of wildflowers, bringing a touch of nature’s beauty to any occasion.",
  },
  {
    id: 2,
    category: "Bouquet",
    name: "Lilie Orchid",
    price: 450,
    image: "/liliorchid.jpg",
    description:
      "A stunning mix of lilies and orchids, symbolizing elegance and grace.",
  },
  {
    id: 3,
    category: "Bouquet",
    name: "Tulips Bouquet",
    price: 500,
    image: "/tul.jpg",
    description:
      "A fresh and colorful tulip bouquet, perfect for brightening up your day.",
  },
  {
    id: 4,
    category: "Bouquet",
    name: "White Rose",
    price: 850,
    image: "/white.jpg",
    description:
      "Elegant white roses that represent purity, innocence, and new beginnings.",
  },
  {
    id: 5,
    category: "Flower",
    name: "Red Rose",
    price: 50,
    image: "/rosef.jpg",
    description:
      "A classic symbol of love and romance, the Red Rose exudes elegance and charm. Perfect for gifting or expressing deep emotions.",
  },
  {
    id: 6,
    category: "Flower",
    name: "Dried Flower",
    price: 690,
    image: "/driedflo.jpg",
    description:
      "A timeless beauty, these dried flowers add a rustic charm to any decor. Long-lasting and elegant, ideal for home or office spaces.",
  },
  {
    id: 7,
    category: "Bouquet",
    name: "Pink Money",
    price: 250,
    image: "/pink.jpg",
    description:
      "A delightful bouquet of pink flowers, symbolizing grace and admiration. A perfect gift for special occasions.",
  },
  {
    id: 8,
    category: "Flower",
    name: "Tulip Lavender",
    price: 550,
    image: "/tulav.jpg",
    description:
      "A rare blend of beauty and fragrance, the Tulip Lavender represents royalty and enchantment. A great addition to any floral arrangement.",
  },
  {
    id: 9,
    category: "Flower",
    name: "Dianthus barbatus",
    price: 150,
    image: "/purple.jpg",
    description:
      "Also known as Sweet William, this flower is admired for its vibrant colors and sweet fragrance, making it a charming garden favorite.",
  },
  {
    id: 10,
    category: "Bouquet",
    name: "Violet Dalia",
    price: 550,
    image: "/vilot.jpg",
    description:
      "A striking bouquet featuring deep violet dahlias, symbolizing strength and elegance. Ideal for adding a touch of luxury to any setting.",
  },
  {
    id: 11,
    category: "Flower",
    name: "Marigold",
    price: 200,
    image: "/mari.jpg",
    description:
      "Bright and cheerful, Marigolds bring warmth and positivity. Known for their cultural significance and medicinal properties.",
  },
  {
    id: 12,
    category: "Bouquet",
    name: "Carnation flower",
    price: 700,
    image: "/carnation.jpg",
    description:
      "A stunning bouquet of carnation flowers, known for their ruffled petals and delicate fragrance. Perfect for expressing love and admiration.",
  },
];

function FlowerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const flower = flowers.find((f) => f.id === parseInt(id));

  if (!flower) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Flower not found
      </h2>
    );
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
        }}
      >
        {/* Image Section */}
        <div style={{ flex: "1", textAlign: "center" }}>
          <img
            src={flower.image}
            alt={flower.name}
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "400px",
              objectFit: "cover",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>

        {/* Details Section */}
        <div
          style={{
            flex: "1",
            padding: "20px",
            maxWidth: "500px",
            backgroundColor: "#f8f9fa",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            marginLeft: "20px",
            textAlign: "left",
          }}
        >
          <h2 style={{ color: "#333", marginBottom: "10px" }}>{flower.name}</h2>
          <p style={{ fontSize: "18px", fontWeight: "bold", color: "#555" }}>
            Category: {flower.category}
          </p>
          <p style={{ fontSize: "20px", fontWeight: "bold", color: "#007bff" }}>
            Price: Rs.{flower.price}
          </p>
          <p style={{ fontSize: "16px", color: "#666", lineHeight: "1.5" }}>
            <strong>Description:</strong> {flower.description}
          </p>
        </div>
      </div>
      <FooterEg />
    </div>
  );
}

export default FlowerDetails;
