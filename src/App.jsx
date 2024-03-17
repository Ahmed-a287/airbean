import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./component/nav/nav.jsx";
import Menu from "./pages/menuPage.jsx";
import About from "./component/about/about.jsx";
import Order from "./component/order/order.jsx";
import Cart from "./component/cart/cart.jsx";
import Home from "./pages/home.jsx";
import "./App.css";

function App() {
  return (
    // Routen för att navigera i appen
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
