import React from "react";
// components
import Store from "./components/Store";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
// context
import ProductContextProvider from "./Context/ProductContextProvider";
import CartContextProvider from "./Context/CartContextProvider";
// styling
import styles from "./App.module.css";
// react-router-dom
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <section className={styles.App_container}>
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/store/:id" element={<ProductDetail />} />
            <Route path="/store" element={<Store />} />
            <Route path="/*" element={<Navigate to="/store" />} />
          </Routes>
        </CartContextProvider>
      </ProductContextProvider>
    </section>
  );
}

export default App;
