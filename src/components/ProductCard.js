import React, { useContext } from "react";
// styling
import styles from "./ProductCard.module.css";
// functions
import {
  gettingIndex,
  titlelengthHandler,
  verifyingproduct,
} from "../functions/functions";
// react router dom
import { Link } from "react-router-dom";
// redux
import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  removeProduct,
  increaseProduct,
  decreaseProduct,
} from "./../redux/cart/cartAction";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const Cart = useSelector((root) => root.cartState);

  return (
    <div className={styles.ProductCard_container}>
      <div className={styles.ProductCard_img_container}>
        <img src={product.image} alt={product.title} />
      </div>

      <div className={styles.ProductCard_detail}>
        <h1 className={styles.ProductCard_title}>
          {titlelengthHandler(product.title)}
        </h1>
        <span className={styles.ProductCard_price}>{product.price} $</span>
        <span className={styles.ProductCard_rating}>
          {product.rating.rate} / 5
        </span>
        <Link
          to={`/store/${product.id}`}
          className={styles.ProductCard_detail_button}
        >
          more details
        </Link>

        <div className={styles.ProductCard_buttons_container}>
          <button
            className={
              verifyingproduct(Cart, product.id)
                ? styles.ProductCard_buying_button_short
                : styles.ProductCard_buying_button_long
            }
            onClick={
              verifyingproduct(Cart, product.id)
                ? () => dispatch(increaseProduct(product))
                : () => dispatch(addProduct(product))
            }
          >
            {verifyingproduct(Cart, product.id) ? "+" : "buy now"}
          </button>

          {verifyingproduct(Cart, product.id) && (
            <span className={styles.ProductCard_selected_item}>
              {gettingIndex(Cart, product.id)}
            </span>
          )}

          {verifyingproduct(Cart, product.id) && (
            <button
              className={styles.ProductCard_remove_button}
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
