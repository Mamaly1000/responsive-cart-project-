import React, { useContext } from "react";
// context
import { ProductContext } from "./../Context/ProductContextProvider";
import ProductCard from "./ProductCard";
// styling
import styles from "./Store.module.css";

const Store = () => {
  const productsdata = useContext(ProductContext);

  return (
    <div className={styles.store_container}>
      {productsdata.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Store;
