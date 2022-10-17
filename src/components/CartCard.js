import React, { useContext } from "react";
// react router dom
import { Link } from "react-router-dom";
// context
import { cartContext } from "../Context/CartContextProvider";
// functions
import { gettingIndex, titlelengthHandler } from "../functions/functions";
// styling
import styles from "./Cart.module.css";

const CartCard = ({ product }) => {
  const { Cart, setCart } = useContext(cartContext);
  return (
    <tr>
      <td className={styles.cart_name}>
        <Link to={`/store/${product.id}`}>
          {titlelengthHandler(product.title)}
        </Link>
      </td>
      <td className={styles.cart_price}>{product.price} $</td>
      <td className={styles.Cart_quantity}>
        <button onClick={() => setCart({ type: "INCREASE", payload: product })}>
          +
        </button>

        <span>{gettingIndex(Cart, product.id)}</span>

        <button
          onClick={
            gettingIndex(Cart, product.id) > 1
              ? () => setCart({ type: "DECREASE", payload: product })
              : () => setCart({ type: "REMOVE-ITEM", payload: product })
          }
        >
          {gettingIndex(Cart, product.id) > 1 ? (
            "-"
          ) : (
            <i className="fa fa-trash"></i>
          )}
        </button>
      </td>
      <td className={styles.cart_pic}>
        <img src={product.image} alt={product.title} />
      </td>
    </tr>
  );
};

export default CartCard;
