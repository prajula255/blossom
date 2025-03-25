import React, { useState, useEffect } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState("");
  const [tempAddress, setTempAddress] = useState("");

  useEffect(() => {
    // Simulating fetching user data from backend
    const fetchUserData = async () => {
      const userData = {
        name: "John Doe",
        email: "johndoe@example.com",
        address: "123 Flower Street, Bloom City",
        profilePic: "https://via.placeholder.com/100", // Sample image
      };
      setUser(userData);
      setTempName(userData.name);
      setTempAddress(userData.address);
    };

    fetchUserData();
  }, []);

  const handleSave = () => {
    setIsEditing(false);
    alert("Changes sent to backend. Refresh to see updated details.");
    // Backend should handle saving, so we don’t update the user state
  };

  if (!user) {
    return <p style={styles.loadingText}>Loading profile...</p>;
  }

  return (
    <div style={styles.profileContainer}>
      <h2 style={styles.heading}>Profile</h2>
      <div style={styles.profileCard}>
        <img src={user.profilePic} alt="Profile" style={styles.profilePic} />
        {isEditing ? (
          <>
            <input
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              style={styles.input}
            />
            <input
              type="text"
              value={tempAddress}
              onChange={(e) => setTempAddress(e.target.value)}
              style={styles.input}
            />
            <button onClick={handleSave} style={styles.button}>
              Save
            </button>
          </>
        ) : (
          <>
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <button onClick={() => setIsEditing(true)} style={styles.button}>
              Edit
            </button>
          </>
        )}
        <p style={styles.note}>* Changes will only be saved from the backend.</p>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  profileContainer: {
    maxWidth: "400px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  profileCard: {
    background: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  profilePic: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "3px solid #ff6f61",
  },
  heading: {
    color: "#333",
  },
  button: {
    background: "#ff6f61",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  input: {
    display: "block",
    width: "80%",
    margin: "5px auto",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  note: {
    fontSize: "12px",
    color: "#777",
    marginTop: "10px",
  },
  loadingText: {
    textAlign: "center",
    marginTop: "50px",
    fontSize: "18px",
    color: "#555",
  },
};

export default ProfilePage;
