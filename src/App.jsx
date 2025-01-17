import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact"; // Import the Contact component

const App = () => {

  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/contact" element={<Contact />} /> {/* Add the Contact route */}
        </Routes>
      </div>
      <Footer/>
    </>
  );
};

export default App;