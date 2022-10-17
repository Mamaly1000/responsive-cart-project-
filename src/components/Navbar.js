import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
// context
import { cartContext } from "../Context/CartContextProvider";

const Navbar = () => {
  
  const { Cart } = useContext(cartContext);
  return (
    <nav className={styles.nav_container}>
      <Link to="/store">
        <i className="fa fa-shopping-basket"></i>
      </Link>

      <Link to="/login">
        <i className="fa fa-user-circle-o"></i>
      </Link>

      <Link to="/cart">
        <i className="fa fa-shopping-cart"></i>
        <span className={styles.counter}>{Cart.overalItems}</span>
      </Link>
    </nav>
  );
};

export default Navbar;
