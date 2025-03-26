import React from "react";
import { Link } from "react-router-dom";

function FooterEg() {
  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        color: "#343a40",
        padding: "40px 20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "100vw",
        boxSizing: "border-box",
        margin: "0",
        borderRadius: "10px",
      }}
    >
      <div style={{ margin: "5px 0", flex: "1 1 200px", minWidth: "200px" }}>
        <h3
          style={{
            fontWeight: "bold",
            marginBottom: "15px",
            fontFamily: "serif",
          }}
        >
          Blossom Bliss
        </h3>
        <p>
          Welcome to the world of Blossom Bliss, where flowers come to life with
          love and creativity. Discover our story, our passion for flowers, and
          our commitment to making every moment memorable.
        </p>
      </div>

      <div style={{ margin: "5px 0", flex: "1 1 200px", minWidth: "200px" }}>
        <h3
          style={{
            fontWeight: "bold",
            marginBottom: "15px",
            fontFamily: "serif",
          }}
        >
          Links
        </h3>
        <p>
          <Link to="/home" style={{ textDecoration: "none", color: "#343a40" }}>
            Home
          </Link>
        </p>
        <p>
          <Link to="/shop" style={{ textDecoration: "none", color: "#343a40" }}>
            Shop
          </Link>
        </p>
        <p>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "#343a40" }}
          >
            About
          </Link>
        </p>
        <p>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "#343a40" }}
          >
            Contact
          </Link>
        </p>
        <p>
          <Link
            to="/feedback"
            style={{ textDecoration: "none", color: "#343a40" }}
          >
            Feedback
          </Link>
        </p>
      </div>

      <div style={{ margin: "5px 0", flex: "1 1 200px", minWidth: "200px" }}>
        <h3
          style={{
            fontWeight: "bold",
            marginBottom: "15px",
            fontFamily: "serif",
          }}
        >
          Contact Us
        </h3>
        <p>Address: 13 Fifth Avenue, </p>
        <p>Kerala</p>
        <p>
          Email:{" "}
          <a
            href="mailto:contact@bliss.com"
            style={{ textDecoration: "none", color: "#343a40" }}
          >
            contact@bliss.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a
            href="tel:+91987654321"
            style={{ textDecoration: "none", color: "#343a40" }}
          >
            +91 987 654 321
          </a>
        </p>
      </div>
    </footer>
  );
}

export default FooterEg;
