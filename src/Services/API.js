import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

const getProducts = async () => {
  const API = await axios.get(`${BASE_URL}/products`);
  return API.data;
};
export const ProductDetailApi = (id) => {
  return `https://fakestoreapi.com/products/${id}`;
};

export default getProducts;
