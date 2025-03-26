// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import FooterEg from "../../components/footer";
// import { Button, Table, Container, Row, Col, Card } from "react-bootstrap";

// function CartPage() {
//   const navigate = useNavigate();
//   const [cart, setCart] = useState(
//     JSON.parse(localStorage.getItem("cart")) || []
//   );

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const updateQuantity = (id, amount) => {
//     const newCart = cart.map((item) =>
//       item.id === id
//         ? { ...item, quantity: Math.max(1, item.quantity + amount) }
//         : item
//     );
//     setCart(newCart);
//   };

//   const removeItem = (id) => {
//     const newCart = cart.filter((item) => item.id !== id);
//     setCart(newCart);
//   };

//   const totalPrice = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
//   const deliveryCharge = cart.length > 0 ? 50 : 0;
//   const grandTotal = totalPrice + deliveryCharge;

//   return (
//     <>
//       <Container className="py-5">
//         <Row>
//           <Col md={8}>
//             <h3 className="mb-4">Shopping Cart</h3>
//             {cart.length === 0 ? (
//               <p>
//                 Your cart is empty.{" "}
//                 <Button onClick={() => navigate("/shop")}>Shop Now</Button>
//               </p>
//             ) : (
//               <Table bordered responsive className="text-center">
//                 <thead style={{ backgroundColor: "#FFF4F2" }}>
//                   <tr>
//                     <th style={{ width: "5%" }}></th>
//                     <th style={{ width: "35%" }}>Product</th>
//                     <th style={{ width: "15%" }}>Price</th>
//                     <th style={{ width: "20%" }}>Quantity</th>
//                     <th style={{ width: "15%" }}>Subtotal</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cart.map((item) => (
//                     <tr key={item.id}>
//                       <td>
//                         <Button
//                           variant="light"
//                           size="sm"
//                           onClick={() => removeItem(item.id)}
//                           className="border-0"
//                         >
//                           x
//                         </Button>
//                       </td>
//                       <td>
//                         <div className="d-flex align-items-center">
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             style={{
//                               width: "80px",
//                               height: "80px",
//                               objectFit: "cover",
//                               borderRadius: "8px",
//                               marginRight: "15px",
//                               padding: "10px",
//                             }}
//                           />
//                         </div>
//                         <span
//                           style={{
//                             color: "#ff5722",
//                             fontWeight: "bold",
//                             fontSize: "16px",
//                           }}
//                         >
//                           {item.name}
//                         </span>
//                       </td>
//                       <td>
//                         <strong>Rs.{item.price.toFixed(2)}</strong>
//                       </td>
//                       <td>
//                         <div className="d-flex align-items-center justify-content-center">
//                           <Button
//                             variant="outline-secondary"
//                             size="sm"
//                             onClick={() => updateQuantity(item.id, -1)}
//                           >
//                             -
//                           </Button>
//                           <span
//                             className="mx-2"
//                             style={{
//                               minWidth: "40px",
//                               display: "inline-block",
//                               textAlign: "center",
//                               fontSize: "16px",
//                               fontWeight: "bold",
//                             }}
//                           >
//                             {item.quantity}
//                           </span>
//                           <Button
//                             variant="outline-secondary"
//                             size="sm"
//                             onClick={() => updateQuantity(item.id, 1)}
//                           >
//                             +
//                           </Button>
//                         </div>
//                       </td>
//                       <td>
//                         <strong>
//                           Rs.{(item.price * item.quantity).toFixed(2)}
//                         </strong>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             )}
//           </Col>

//           <Col md={4}>
//             <Card
//               className="p-3 shadow-sm"
//               style={{ backgroundColor: "#FFF4F2", borderRadius: "10px" }}
//             >
//               <h4 className="mb-3">Cart Totals</h4>
//               <div className="d-flex justify-content-between mt-2">
//                 <span>Subtotal:</span>
//                 <strong>Rs.{totalPrice.toFixed(2)}</strong>
//               </div>
//               <div className="d-flex justify-content-between mt-2">
//                 <span>Delivery Charge:</span>
//                 <strong>Rs.{deliveryCharge.toFixed(2)}</strong>
//               </div>
//               <div className="d-flex justify-content-between mt-2">
//                 <span>Grand Total:</span>
//                 <strong>Rs.{grandTotal.toFixed(2)}</strong>
//               </div>
//               <Button
//                 style={{
//                   backgroundColor: "#FF6F4F",
//                   border: "none",
//                   fontSize: "16px",
//                 }}
//                 className="w-100 py-2 mt-3"
//                 onClick={() => navigate("/checkOut")}
//               >
//                 PROCEED TO CHECKOUT
//               </Button>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//       <FooterEg />
//     </>
//   );
// }

// export default CartPage;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FooterEg from "../../components/footer";
import { Button, Table, Container, Row, Col, Card } from "react-bootstrap";

function CartPage() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    // Load flowers from localStorage or use initial values
    const storedFlowers = JSON.parse(localStorage.getItem("flowers"));
    if (storedFlowers) {
      setFlowers(storedFlowers);
    } else {
      // Initialize with default flowers if not present
      const initialFlowers = [
        {
          id: 1,
          category: "Bouquet",
          name: "Wild Flower",
          price: 430,
          image: "/wi.jpg",
          stock: 10,
        },
        {
          id: 2,
          category: "Bouquet",
          name: "Lilie Orchid",
          price: 450,
          image: "/liliorchid.jpg",
          stock: 0,
        },
        {
          id: 3,
          category: "Bouquet",
          name: "Tulips Bouquet",
          price: 500,
          image: "/tul.jpg",
          stock: 5,
        },
        {
          id: 4,
          category: "Bouquet",
          name: "White Rose",
          price: 850,
          image: "/white.jpg",
          stock: 8,
        },
        {
          id: 5,
          category: "Flower",
          name: "Red Rose",
          price: 50,
          image: "/rosef.jpg",
          stock: 0,
        },
        {
          id: 6,
          category: "Flower",
          name: "Dried Flower",
          price: 690,
          image: "/driedflo.jpg",
          stock: 12,
        },
        {
          id: 7,
          category: "Bouquet",
          name: "Pink Money",
          price: 250,
          image: "/pink.jpg",
          stock: 3,
        },
        {
          id: 8,
          category: "Flower",
          name: "Tulip Lavender",
          price: 550,
          image: "/tulav.jpg",
          stock: 0,
        },
        {
          id: 9,
          category: "Flower",
          name: "Dianthus barbatus",
          price: 150,
          image: "/purple.jpg",
          stock: 19,
        },
        {
          id: 10,
          category: "Bouquet",
          name: "Violet Dalia",
          price: 550,
          image: "/vilot.jpg",
          stock: 5,
        },
        {
          id: 11,
          category: "Flower",
          name: "Marigold",
          price: 200,
          image: "/mari.jpg",
          stock: 0,
        },
        {
          id: 12,
          category: "Bouquet",
          name: "Carnation flower",
          price: 700,
          image: "/carnation.jpg",
          stock: 3,
        },
      ];
      setFlowers(initialFlowers);
      localStorage.setItem("flowers", JSON.stringify(initialFlowers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = (id, amount) => {
    const newCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
        : item
    );
    setCart(newCart);
  };

  const removeItem = (id) => {
    const itemToRemove = cart.find((item) => item.id === id);
    if (itemToRemove) {
      // Restore stock for the removed item
      const updatedFlowers = flowers.map((flower) => {
        if (flower.id === itemToRemove.id) {
          return { ...flower, stock: flower.stock + itemToRemove.quantity };
        }
        return flower;
      });

      setFlowers(updatedFlowers);
      localStorage.setItem("flowers", JSON.stringify(updatedFlowers)); // Update localStorage
    }

    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryCharge = cart.length > 0 ? 50 : 0;
  const grandTotal = totalPrice + deliveryCharge;

  return (
    <>
      <Container className="py-5">
        <Row>
          <Col md={8}>
            <h3 className="mb-4">Shopping Cart</h3>
            {cart.length === 0 ? (
              <p>
                Your cart is empty.{" "}
                <Button onClick={() => navigate("/shop")}>Shop Now</Button>
              </p>
            ) : (
              <Table bordered responsive className="text-center">
                <thead style={{ backgroundColor: "#FFF4F2" }}>
                  <tr>
                    <th style={{ width: "5%" }}></th>
                    <th style={{ width: "35%" }}>Product</th>
                    <th style={{ width: "15%" }}>Price</th>
                    <th style={{ width: "20%" }}>Quantity</th>
                    <th style={{ width: "15%" }}>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <Button
                          variant="light"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="border-0"
                        >
                          x
                        </Button>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{
                              width: "80px",
                              height: "80px",
                              objectFit: "cover",
                              borderRadius: "8px",
                              marginRight: "15px",
                              padding: "10px",
                            }}
                          />
                        </div>
                        <span
                          style={{
                            color: "#ff5722",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          {item.name}
                        </span>
                      </td>
                      <td>
                        <strong>Rs.{item.price.toFixed(2)}</strong>
                      </td>
                      <td>
                        <div className="d-flex align-items-center justify-content-center">
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            -
                          </Button>
                          <span
                            className="mx-2"
                            style={{
                              minWidth: "40px",
                              display: "inline-block",
                              textAlign: "center",
                              fontSize: "16px",
                              fontWeight: "bold",
                            }}
                          >
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => updateQuantity(item.id, 1)}
                            disabled={item.stock <= item.quantity} // Disable if stock is less than or equal to quantity
                          >
                            +
                          </Button>
                        </div>
                      </td>
                      <td>
                        <strong>
                          Rs.{(item.price * item.quantity).toFixed(2)}
                        </strong>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Col>

          <Col md={4}>
            <Card
              className="p-3 shadow-sm"
              style={{ backgroundColor: "#FFF4F2", borderRadius: "10px" }}
            >
              <h4 className="mb-3">Cart Totals</h4>
              <div className="d-flex justify-content-between mt-2">
                <span>Subtotal:</span>
                <strong>Rs.{totalPrice.toFixed(2)}</strong>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <span>Delivery Charge:</span>
                <strong>Rs.{deliveryCharge.toFixed(2)}</strong>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <span>Grand Total:</span>
                <strong>Rs.{grandTotal.toFixed(2)}</strong>
              </div>
              <Button
                style={{
                  backgroundColor: "#FF6F4F",
                  border: "none",
                  fontSize: "16px",
                }}
                className="w-100 py-2 mt-3"
                onClick={() => navigate("/checkOut")}
              >
                PROCEED TO CHECKOUT
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
      <FooterEg />
    </>
  );
}

export default CartPage;
