import React, { useContext } from "react";
// styling
import styles from "./Cart.module.css";
// components
import CartCard from "./CartCard";
// context
import { cartContext } from "../Context/CartContextProvider";
import { Link } from "react-router-dom";

const Cart = () => {
  const { Cart, setCart } = useContext(cartContext);
  return (
    <section className={styles.Cart_container}>
      <table>
        <thead>
          <th className={styles.cart_name}>name</th>
          <th className={styles.cart_price}>price</th>
          <th className={styles.Cart_quantity}>quantity</th>
          <th className={styles.cart_pic}>image</th>
        </thead>
        <tbody>
          {Cart.seletedItems.map((item) => (
            <CartCard key={item.id} product={item} />
          ))}
          {Cart.seletedItems.length === 0 && (
            <div className={styles.Cart_message}>
              <h3>Cart is empty !</h3>
              <Link to="/store">go to store</Link>
            </div>
          )}
        </tbody>
      </table>
      <div className={styles.Cart_detail}>
        {Cart.seletedItems.length > 0 && (
          <div>
            <h2>
              overall items : <span>{Cart.overalItems}</span>
            </h2>
            <h2>
              overall price : <span>{Cart.overalPrice}</span>
            </h2>
            <button onClick={() => setCart({ type: "CLEAR" })}>clear</button>
            <button onClick={() => setCart({ type: "CHECKOUT" })}>
              checkout
            </button>
          </div>
        )}

        {Cart.checkout && (
          <div className={styles.Cart_message}>
            <h3>you checked out completely</h3>
            <Link to="/store">buy more !</Link>
          </div>
        )}

        {Cart.overalItems === 0 && !Cart.checkout && (
          <div className={styles.Cart_message}>
            <h3>you cleared cart successfully</h3>
            <Link to="/store">go back to store !</Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
