import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterEg from "../../components/footer";
import {
  addFlowerAPI,
  deleteFlowerAPI,
} from "../../../api_services/allAPIs/adminAPI";
import axios from "axios";
import { baseURL } from "../../../api_services/baseURL";
import { updateStockAPI } from "../../../api_services/allAPIs/updateAPI";

function AdminPage() {
  const [flowers, setFlowers] = useState([]);
  const [newFlower, setNewFlower] = useState({
    category: "",
    name: "",
    price: "",
    images: [],
    stock: "",
  });

  const [stockUpdate, setStockUpdate] = useState({});

  useEffect(() => {
    const fetchFlower = async () => {
      const response = await axios.get(`${baseURL}/getFlowers`);
      setFlowers(response.data.flowers);
    };

    fetchFlower();

    const interval = setInterval(() => {
      fetchFlower();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setNewFlower({ ...newFlower, [e.target.name]: e.target.value });
  };

  const addFlower = async () => {
    const token = localStorage.getItem("authToken");
    if (
      !newFlower.name ||
      !newFlower.price ||
      !newFlower.images ||
      !newFlower.stock
    ) {
      toast.error("Please fill in all fields");
      return;
    } else {
      const formData = new FormData();
      formData.append("category", newFlower.category);
      formData.append("name", newFlower.name);
      formData.append("price", newFlower.price);
      formData.append("stock", newFlower.stock);
      newFlower.images.forEach((image) => {
        formData.append("images", image.file);
      });
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        Authorization: `${token}`,
      };
      try {
        const result = await addFlowerAPI(formData, reqHeader);
        console.log("result", result);
      } catch (error) {
        console.error(error);
      }
    }
    toast.success("Flower added successfully!");
  };

  // const deleteFlower = (id) => {
  //   const updatedFlowers = flowers.filter((flower) => flower.id !== id);
  //   setFlowers(updatedFlowers);
  //   localStorage.setItem("flowers", JSON.stringify(updatedFlowers));
  //   toast.info("Flower removed");
  // };
  const deleteFlower = async (id) => {
    try {
      await deleteFlowerAPI(id); // Delete from backend

      // Then update local state
      const updatedFlowers = flowers.filter((flower) => flower._id !== id);
      setFlowers(updatedFlowers);

      toast.info("Flower deleted successfully!");
    } catch (error) {
      console.error("Error deleting flower:", error);
      toast.error("Failed to delete flower.");
    }
  };

  const handleStockChange = (id, value) => {
    setStockUpdate({ ...stockUpdate, [id]: value });
  };

  // const updateStock = (id) => {
  //   const updatedFlowers = flowers.map((flower) => {
  //     if (flower.id === id) {
  //       const newStock =
  //         parseInt(flower.stock) + parseInt(stockUpdate[id] || 0);
  //       return { ...flower, stock: newStock };
  //     }
  //     return flower;
  //   });
  //   setFlowers(updatedFlowers);
  //   localStorage.setItem("flowers", JSON.stringify(updatedFlowers));
  //   toast.success("Stock updated successfully!");
  //   setStockUpdate({ ...stockUpdate, [id]: "" });
  // };

  const updateStock = async (id) => {
    try {
      const updatedStock = stockUpdate[id];
      await updateStockAPI(id, updatedStock);

      toast.success("Stock updated successfully!");
      setStockUpdate({ ...stockUpdate, [id]: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to update stock.");
    }
  };

  const handleFileChange = (event) => {
    const images = Array.from(event.target.files);
    const newImages = images.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setNewFlower((prev) => ({
      ...prev,
      images: newImages, // Store the file object instead of URL
    }));
  };

  const handleRemoveImage = (index) => {
    setNewFlower((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
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
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={styles.input}
          />
          {newFlower.images &&
            newFlower.images.map((item, index) => (
              <div
                key={index}
                style={{
                  height: "100px",
                  width: "100px",
                  position: "relative",
                }}
              >
                <img
                  src={item.url}
                  alt="img"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
                <span
                  role="button"
                  className="position-absolute p-1 bg-danger top-0 end-0"
                  onClick={() => handleRemoveImage(index)}
                >
                  x
                </span>
              </div>
            ))}

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
              <div key={flower._id} style={styles.card}>
                <img
                  src={`${baseURL}${flower.image[0]}`}
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
                  value={stockUpdate[flower._id] || ""}
                  onChange={(e) =>
                    handleStockChange(flower._id, e.target.value)
                  }
                  style={styles.stockInput}
                />
                <button
                  onClick={() => updateStock(flower._id)}
                  style={styles.updateStockButton}
                >
                  Update Stock
                </button>
                <button
                  onClick={() => deleteFlower(flower._id)}
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
    padding: "12px 14px",
    fontSize: "15px",
    border: "1px solid #d1d5db", // subtle gray
    borderRadius: "8px",
    outline: "none",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    backgroundColor: "#fafafa",
    boxSizing: "border-box",
  },
  stockInput: {
    width: "100%",
    padding: "10px 12px",
    fontSize: "15px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    backgroundColor: "#fafafa",
    marginTop: "10px",
    outline: "none",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    boxSizing: "border-box",
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
