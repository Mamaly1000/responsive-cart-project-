import React, { createContext, useState, useEffect } from "react";
import getProducts from "./../Services/API";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    const FetchAPI = async () => {
      setProducts(await getProducts());
    };
    FetchAPI();
  }, []);

  return (
    <div>
      <ProductContext.Provider value={Products}>
        {props.children}
      </ProductContext.Provider>
    </div>
  );
};

export default ProductContextProvider;
