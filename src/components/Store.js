import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
// styling
import styles from "./Store.module.css";
// react redux
import { useSelector, useDispatch } from "react-redux";
import fetchProductAPI from "../redux/products/productsActions";
// loading svg
import loading from "./Infinity-1s-219px.svg";

const Store = () => {
  const productState = useSelector((root) => root.productState);
  const dispatch = useDispatch();

  useEffect(() => {
    !productState.products.length && dispatch(fetchProductAPI());
  }, [productState.products, dispatch]);

  return (
    <div className={styles.store_container}>
      {productState.loading ? (
        <img src={loading} alt="loading" />
      ) : productState.error ? (
        <>
          <img src={loading} alt="loading" />
          <h1 style={{ color: "#f2d7ee" }}>{productState.error}</h1>
        </>
      ) : (
        productState.products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      )}
    </div>
  );
};

export default Store;
