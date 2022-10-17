import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

const getProducts = async () => {
  const API = await axios.get(`${BASE_URL}/products`);
  return API.data;
};
export const ProductDetailApi = async (id) => {
  const api = await axios.get(`${BASE_URL}/products/${id}`);
  return api.data;
};

export default getProducts;
