import FooterEg from "../../components/footer";
import NavEg from "../../components/navbar";

function FlowersList() {
    const flowers = [
        { id: 1, category: "Bouquet", name: "Wild Flower", price: "Rs.430", image: "/wi.jpg" },
        { id: 2, category: "Flower", name: "Chembakam", price: "Rs.90", image: "/chembakam.jpg" },
        { id: 3, category: "Bouquet", name: "Tulips Bouquet", price: "Rs.500", image: "/tul.jpg" },
        { id: 4, category: "Bouquet", name: "White Rose", price: "Rs.450", image: "/white.jpg" },
        { id: 5, category: "Flower", name: "Red Rose", price: "Rs.50", image: "/rosef.jpg" },
        { id: 6, category: "Flower", name: "Water lilies", price: "Rs.190", image: "/lilie.jpg" },
        { id: 7, category: "Bouquet", name: "Pink Money", price: "Rs.250", image: "/pink.jpg" },
        { id: 8, category: "Flower", name: "West Indian Jasmine", price: "Rs.250", image: "/jas.jpg" },
        { id: 9, category: "Flower", name: "Dianthus barbatus", price: "Rs.150", image: "/purple.jpg" },
        { id: 10, category: "Bouquet", name: "Violet Dalia", price: "Rs.550", image: "/vilot.jpg" },
        { id: 11, category: "Flower", name: "Marigold", price: "Rs.200", image: "/mari.jpg" },
        { id: 12, category: "Flower", name: " Wild Purple ", price: "Rs.60", image: "/pur.jpg" }
    ];

    return (
        <>
            <NavEg />
            <div style={{ padding: "24px" }}>
                <h2 style={{ fontWeight: "bold", marginBottom: "16px", fontSize: "20px", textAlign: "left" }}>Shop</h2>
                <ul style={{
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "20px"
                }}>
                    {flowers.map((flower) => (
                        <li
                            key={flower.id}
                        >
                            <img
                                src={flower.image}
                                alt={flower.name}
                                style={{
                                    width: "260px",
                                    height: "260px",
                                    objectFit: "cover",
                                }}
                            />
                            <span style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}><br></br>
                                {flower.category}<br /> {flower.name} <br /> {flower.price}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <FooterEg />
        </>
    );
}

export default FlowersList;
