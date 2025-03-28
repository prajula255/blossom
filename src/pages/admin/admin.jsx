import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterEg from "../../components/footer";

function AdminPage() {
  const [flowers, setFlowers] = useState([]);
  const [newFlower, setNewFlower] = useState({
    category: "",
    name: "",
    price: "",
    image: "",
    stock: "",
  });
  const [stockUpdate, setStockUpdate] = useState({});

  useEffect(() => {
    const storedFlowers = JSON.parse(localStorage.getItem("flowers")) || [];
    setFlowers(storedFlowers);
  }, []);

  const handleChange = (e) => {
    setNewFlower({ ...newFlower, [e.target.name]: e.target.value });
  };

  const addFlower = () => {
    if (
      !newFlower.name ||
      !newFlower.price ||
      !newFlower.image ||
      !newFlower.stock
    ) {
      toast.error("Please fill in all fields");
      return;
    }
    const updatedFlowers = [...flowers, { ...newFlower, id: Date.now() }];
    setFlowers(updatedFlowers);
    localStorage.setItem("flowers", JSON.stringify(updatedFlowers));
    setNewFlower({ category: "", name: "", price: "", image: "", stock: "" });
    toast.success("Flower added successfully!");
  };

  const deleteFlower = (id) => {
    const updatedFlowers = flowers.filter((flower) => flower.id !== id);
    setFlowers(updatedFlowers);
    localStorage.setItem("flowers", JSON.stringify(updatedFlowers));
    toast.info("Flower removed");
  };

  const handleStockChange = (id, value) => {
    setStockUpdate({ ...stockUpdate, [id]: value });
  };

  const updateStock = (id) => {
    const updatedFlowers = flowers.map((flower) => {
      if (flower.id === id) {
        const newStock =
          parseInt(flower.stock) + parseInt(stockUpdate[id] || 0);
        return { ...flower, stock: newStock };
      }
      return flower;
    });
    setFlowers(updatedFlowers);
    localStorage.setItem("flowers", JSON.stringify(updatedFlowers));
    toast.success("Stock updated successfully!");
    setStockUpdate({ ...stockUpdate, [id]: "" });
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Admin Panel</h2>
        <div style={styles.formContainer}>
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={newFlower.category}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newFlower.name}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newFlower.price}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newFlower.image}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={newFlower.stock}
            onChange={handleChange}
            style={styles.input}
          />
          <button onClick={addFlower} style={styles.addButton}>
            Add Flower
          </button>
        </div>

        <div style={styles.listContainer}>
          {flowers.length > 0 ? (
            flowers.map((flower) => (
              <div key={flower.id} style={styles.card}>
                <img
                  src={flower.image}
                  alt={flower.name}
                  style={styles.image}
                />
                <p>
                  <strong>{flower.name}</strong>
                </p>
                <p>
                  Price: <span style={styles.price}>₹{flower.price}</span>
                </p>
                <p>Stock: {flower.stock}</p>
                <input
                  type="number"
                  placeholder="Add Stock"
                  value={stockUpdate[flower.id] || ""}
                  onChange={(e) => handleStockChange(flower.id, e.target.value)}
                  style={styles.stockInput}
                />
                <button
                  onClick={() => updateStock(flower.id)}
                  style={styles.updateStockButton}
                >
                  Update Stock
                </button>
                <button
                  onClick={() => deleteFlower(flower.id)}
                  style={styles.deleteButton}
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p style={styles.emptyMessage}>No flowers added yet.</p>
          )}
        </div>
      </div>

      <FooterEg />
      <ToastContainer />
    </div>
  );
}

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f4f4f9",
  },
  container: {
    width: "90%",
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    textAlign: "center",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
  },
  heading: {
    fontSize: "26px",
    marginBottom: "20px",
    fontWeight: "600",
    color: "#333",
  },
  formContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
  },
  addButton: {
    gridColumn: "span 2",
    padding: "12px",
    background: "#28a745",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
  },
  listContainer: {
    marginTop: "30px",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
    width: "220px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "0.3s ease-in-out",
  },
  image: {
    width: "120px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  price: {
    fontWeight: "bold",
    color: "#007bff",
  },
  stockInput: {
    width: "80%",
    padding: "8px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginTop: "10px",
  },
  updateStockButton: {
    marginTop: "10px",
    padding: "8px 15px",
    background: "#17a2b8",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.3s ease-in-out",
  },
  deleteButton: {
    marginTop: "10px",
    padding: "8px 15px",
    background: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.3s ease-in-out",
  },
  emptyMessage: {
    fontSize: "18px",
    color: "#888",
    marginTop: "20px",
  },
};

export default AdminPage;
