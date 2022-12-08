import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
// redux
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector( root => root.cartState);
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
        <span className={styles.counter}>{state.overalItems}</span>
      </Link>
    </nav>
  );
};

export default Navbar;
