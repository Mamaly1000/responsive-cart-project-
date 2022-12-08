import React from "react";
// react router dom
import { Link } from "react-router-dom";
// functions
import { gettingIndex, titlelengthHandler } from "../functions/functions";
// styling
import styles from "./Cart.module.css";
// redux
import { useSelector, useDispatch } from "react-redux";
import {
  increaseProduct,
  decreaseProduct,
  removeProduct,
} from "../redux/cart/cartAction";

const CartCard = ({ product }) => {
  const Cart = useSelector((root) => root.cartState);
  const dispatch = useDispatch();

  return (
    <tr>
      <td className={styles.cart_name}>
        <Link to={`/store/${product.id}`}>
          {titlelengthHandler(product.title)}
        </Link>
      </td>
      <td className={styles.cart_price}>{product.price} $</td>
      <td className={styles.Cart_quantity}>
        <button onClick={() => dispatch(increaseProduct(product))}>
          +
        </button>

        <span>{gettingIndex(Cart, product.id)}</span>

        <button
          onClick={
            gettingIndex(Cart, product.id) > 1
              ? () => dispatch(decreaseProduct(product))
              : () => dispatch(removeProduct(product))
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
