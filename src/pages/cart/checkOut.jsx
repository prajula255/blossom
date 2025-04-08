import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FooterEg from "../../components/footer";
import { Button, Table, Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { getCartAPI } from "../../../api_services/allAPIs/cartAPI";
import { baseURL } from "../../../api_services/baseURL";

function CheckoutPage() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await getCartAPI();
        setCart(res.data);

        if (res.data.length === 0) {
          toast.warning("Cart is empty, redirecting...");
          navigate("/cart");
        }
      } catch (err) {
        toast.error("Failed to load cart");
        navigate("/cart");
      }
    };

    fetchCart();
  }, [navigate]);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryCharge = 50;
  const grandTotal = totalPrice + deliveryCharge;

  const handlePlaceOrder = () => {
    navigate("/order", { state: { cart } });
  };

  return (
    <>
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col
              xs={12}
              md={6}
              style={{
                padding: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                marginBottom: "20px",
              }}
            >
              <h3 className="text-center">Order Summary</h3>
              <Table striped bordered hover className="text-center">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item._id}>
                      <td>
                        <img
                          src={`${baseURL}${item.image}`}
                          alt={item.name}
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "5px",
                            objectFit: "cover",
                          }}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>₹{item.price * item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <h5 className="text-center mt-3">Items Total: ₹{totalPrice}</h5>
              <h5 className="text-center">Delivery: ₹{deliveryCharge}</h5>
              <h4 className="text-center mt-2">
                <strong>Grand Total: ₹{grandTotal}</strong>
              </h4>
              <Button
                variant="success"
                className="w-100 mt-3"
                onClick={handlePlaceOrder}
              >
                Place Order
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterEg />
    </>
  );
}

export default CheckoutPage;
