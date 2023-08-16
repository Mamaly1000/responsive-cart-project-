import React, { useEffect, useState } from "react";
// axios
import axios from "axios";
// react-router-dom
import { Link, useParams } from "react-router-dom";
// styling
import styles from "./ProductDetail.module.css";
// functions
import { gettingIndex, verifyingproduct } from "../functions/functions";
import { ProductDetailApi } from "../Services/API";
// react-redux
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  removeProduct,
  increaseProduct,
  decreaseProduct,
} from "./../redux/cart/cartAction";

const ProductDetail = () => {
  const [productdetail, setproductDetail] = useState([]);
  const param = useParams();
  const ID = param.id;
  const Cart = useSelector((root) => root.cartState);
  const dispatch = useDispatch();

  const fetchapi = async () => {
    const { data } = await axios.get(ProductDetailApi(ID));
    setproductDetail(data);
  };
  useEffect(() => {
    fetchapi(); // eslint-disable-next-line
  }, []);

  return (
    <section className={styles.ProductDetail_container}>
      <div className={styles.ProductDetail_leftSide}>
        <h1 className={styles.ProductDetail_title}>{productdetail.title}</h1>
        <p className={styles.ProductDetail_description}>
          {productdetail.description}
        </p>

        <div className={styles.ProductDetail_additionalData}>
          <span className={styles.ProductDetail_category}>
            category : {productdetail.category}
          </span>

          <span className={styles.ProductDetail_price}>
            price : {productdetail.price}
          </span>
        </div>

        <div className={styles.ProductDetail_buttons_container}>
          <button
            className={
              verifyingproduct(Cart, productdetail.id)
                ? styles.ProductDetail_buying_button_short
                : styles.ProductDetail_buying_button_long
            }
            onClick={
              verifyingproduct(Cart, productdetail.id)
                ? () => dispatch(increaseProduct(productdetail))
                : () => dispatch(addProduct(productdetail))
            }
          >
            {verifyingproduct(Cart, productdetail.id) ? "+" : "buy now"}
          </button>

          {verifyingproduct(Cart, productdetail.id) && (
            <span className={styles.ProductDetail_selected_item}>
              {gettingIndex(Cart, productdetail.id)}
            </span>
          )}

          {verifyingproduct(Cart, productdetail.id) && (
            <button
              className={styles.ProductDetail_remove_button}
              onClick={
                gettingIndex(Cart, productdetail.id) > 1
                  ? () => dispatch(decreaseProduct(productdetail))
                  : () => dispatch(removeProduct(productdetail))
              }
            >
              {gettingIndex(Cart, productdetail.id) > 1 ? (
                "-"
              ) : (
                <i className="fa fa-trash"></i>
              )}
            </button>
          )}
        </div>

        <Link className={styles.ProductDetail_store_link} to="/store">
          back to store
        </Link>
      </div>

      <div className={styles.ProductDetail_rightSide}>
        <img src={productdetail.image} alt={productdetail.title} />
      </div>
    </section>
  );
};

export default ProductDetail;
