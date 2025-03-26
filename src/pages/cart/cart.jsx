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
  const [flowers, setFlowers] = useState(
    JSON.parse(localStorage.getItem("flowers")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("flowers", JSON.stringify(flowers));
  }, [flowers]);

  // Function to add an item to cart and reduce stock
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });

    setFlowers((prevFlowers) =>
      prevFlowers.map((flower) =>
        flower.id === item.id ? { ...flower, stock: flower.stock - 1 } : flower
      )
    );
  };

  // Function to update quantity in cart
  const updateQuantity = (id, amount) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + amount);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    });

    setFlowers((prevFlowers) => {
      return prevFlowers.map((flower) => {
        if (flower.id === id) {
          return { ...flower, stock: flower.stock - amount };
        }
        return flower;
      });
    });
  };

  // Function to remove item from cart and restore stock
  const removeItem = (id) => {
    const itemToRemove = cart.find((item) => item.id === id);
    if (itemToRemove) {
      setFlowers((prevFlowers) =>
        prevFlowers.map((flower) =>
          flower.id === id
            ? { ...flower, stock: flower.stock + itemToRemove.quantity }
            : flower
        )
      );

      setCart(cart.filter((item) => item.id !== id));
    }
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
                            disabled={item.quantity <= 1}
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
                            onClick={() => {
                              const flowerStock =
                                flowers.find((flower) => flower.id === item.id)
                                  ?.stock || 0;
                              if (item.quantity < flowerStock) {
                                updateQuantity(item.id, 1);
                              }
                            }}
                            disabled={
                              item.quantity >=
                              (flowers.find((flower) => flower.id === item.id)
                                ?.stock || 0)
                            }
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
