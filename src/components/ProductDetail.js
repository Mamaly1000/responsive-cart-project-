import React, { useContext, useEffect, useState } from "react";
// api
import { ProductDetailApi } from "../Services/API";
// react-router-dom
import { Link, useParams } from "react-router-dom";
// styling
import styles from "./ProductDetail.module.css";
// functions
import { gettingIndex, verifyingproduct } from "../functions/functions";
// context
import { cartContext } from "../Context/CartContextProvider";

const ProductDetail = () => {

  const { Cart, setCart } = useContext(cartContext);
  const [product, setproduct] = useState({});

  const history = useParams();
  const ID = history.id;

  useEffect(() => {
    const fetchApi = async () => {
      setproduct(await ProductDetailApi(ID));
    };
    fetchApi();
  }, [ID]);

  return (
    <section className={styles.ProductDetail_container}>
      <div className={styles.ProductDetail_leftSide}>
        <h1 className={styles.ProductDetail_title} >{product.title}</h1>
        <p className={styles.ProductDetail_description} >{product.description}</p>

        <div className={styles.ProductDetail_additionalData}>
          <span className={styles.ProductDetail_category}>
            category : {product.category}
          </span>

          <span className={styles.ProductDetail_price}>
            price : {product.price}
          </span>
        </div>

        <div className={styles.ProductDetail_buttons_container}>
          <button
            className={
              verifyingproduct(Cart, product.id)
                ? styles.ProductDetail_buying_button_short
                : styles.ProductDetail_buying_button_long
            }
            onClick={
              verifyingproduct(Cart, product.id)
                ? () => setCart({ type: "INCREASE", payload: product })
                : () => setCart({ type: "ADD-ITEM", payload: product })
            }
          >
            {verifyingproduct(Cart, product.id) ? "+" : "buy now"}
          </button>

          {verifyingproduct(Cart, product.id) && (
            <span className={styles.ProductDetail_selected_item}>
              {gettingIndex(Cart, product.id)}
            </span>
          )}

          {verifyingproduct(Cart, product.id) && (
            <button
              className={styles.ProductDetail_remove_button}
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
          )}
        </div>

        <Link className={styles.ProductDetail_store_link} to="/store">back to store</Link>
      </div>

      <div className={styles.ProductDetail_rightSide}>
        <img src={product.image} alt={product.title} />
      </div>
    </section>
  );
};

export default ProductDetail;
