import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import FooterEg from "../../components/footer";
import axios from "axios";
import { clearCartAPI } from "../../../api_services/allAPIs/clearCartAPI";
function OrderPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];

  const userId = localStorage.getItem("userId");
  useEffect(() => {
    console.log(userId);
  }, [userId]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    state: "",
    pincode: "",
    paymentMethod: "cod",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });

  const statesList = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const months = Array.from({ length: 12 }, (_, i) => ({
    value: String(i + 1).padStart(2, "0"),
    label: String(i + 1).padStart(2, "0"),
  }));

  const years = Array.from({ length: 50 }, (_, i) => ({
    value: String(currentYear + i),
    label: String(currentYear + i),
  }));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.paymentMethod === "card" &&
      (!formData.cardNumber ||
        !formData.expiryMonth ||
        !formData.expiryYear ||
        !formData.cvv)
    ) {
      alert("Please enter all card details!");
      return;
    }

    const orderData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      street: formData.street,
      state: formData.state,
      pincode: formData.pincode,
      paymentMethod: formData.paymentMethod,
      cartItems: cart, // Send cart data from state
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/placeorder",
        orderData
      );

      if (response.status === 201) {
        const reqBody = {
          userId: userId,
        };
        try {
          const res = await clearCartAPI(reqBody);
          console.log("cleared", res);
        } catch (error) {
          console.error(error);
        }
        alert("Order placed successfully!");
        localStorage.removeItem("cart"); // Clear cart from local storage
        navigate("/home");
      }
    } catch (error) {
      console.error("Order placement failed:", error.response?.data || error);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6} className="p-4 border rounded shadow">
          <div
            style={{
              maxWidth: "200px",
              margin: "auto",
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "#007bff",
                marginBottom: "15px",
              }}
            >
              Order Details
            </h2>

            <Form
              onSubmit={handleSubmit}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {/* Full Name */}
              <Form.Group>
                <Form.Label>
                  <strong>Full Name</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Email */}
              <Form.Group>
                <Form.Label>
                  <strong>Email</strong>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Phone */}
              <Form.Group>
                <Form.Label>
                  <strong>Phone</strong>
                </Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Address */}
              <Form.Group>
                <Form.Label>
                  <strong>Street Address</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* State & Pincode */}
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>
                      <strong>State</strong>
                    </Form.Label>
                    <Form.Select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select State</option>
                      {statesList.map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>
                      <strong>Pincode</strong>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Payment Method */}
              <Form.Group>
                <Form.Label>
                  <strong>Payment Method</strong>
                </Form.Label>
                <Form.Select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                >
                  <option value="cod">Cash on Delivery</option>
                  <option value="card">Credit/Debit Card</option>
                </Form.Select>
              </Form.Group>

              {/* Card Payment Fields */}
              {formData.paymentMethod === "card" && (
                <>
                  <Form.Group>
                    <Form.Label>
                      <strong>Card Number</strong>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Expiry Date - Separate Dropdowns */}
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>
                          <strong>Expiry Month</strong>
                        </Form.Label>
                        <Form.Select
                          name="expiryMonth"
                          value={formData.expiryMonth}
                          onChange={handleChange}
                          required
                        >
                          <option value="">MM</option>
                          {months.map((month) => (
                            <option key={month.value} value={month.value}>
                              {month.label}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>
                          <strong>Expiry Year</strong>
                        </Form.Label>
                        <Form.Select
                          name="expiryYear"
                          value={formData.expiryYear}
                          onChange={handleChange}
                          required
                        >
                          <option value="">YYYY</option>
                          {years.map((year) => (
                            <option key={year.value} value={year.value}>
                              {year.label}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group>
                    <Form.Label>
                      <strong>CVV</strong>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </>
              )}

              <Button
                type="submit"
                style={{
                  width: "100%",
                  fontWeight: "bold",
                  backgroundColor: "#28a745",
                  border: "none",
                  borderRadius: "8px",
                  marginTop: "10px",
                }}
              >
                Confirm Order
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      <FooterEg />
    </Container>
  );
}

export default OrderPage;
