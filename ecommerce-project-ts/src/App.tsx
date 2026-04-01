import { HomePage } from "./pages/home/HomePage";
import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { NotFound } from "./pages/NotFound";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };
  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage cart={cart} loadCart={loadCart} />}
      ></Route>
      <Route
        path="Checkout"
        element={<CheckoutPage cart={cart} loadCart={loadCart} />}
      ></Route>
      <Route path="orders" element={<OrdersPage cart={cart} />}></Route>
      <Route path="tracking" element={<TrackingPage />}></Route>
      <Route path="error" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
