import axios from "axios";
const BASE_URL = "https://fakestoreapi.com";

const fetchProductRequest = () => {
  return { type: "fetch_Product_Request" };
};
const fetchProductSuccess = (product) => {
  return { type: "fetch_Product_Success", payload: product };
};
const fetchProductFaliure = (err) => {
  return { type: "fetch_Product_Faliure", payload: err };
};

const fetchProductAPI = () => {
  return (dispatch) => {
    dispatch(fetchProductRequest());
    axios
      .get(`${BASE_URL}/products`)
      .then((res) => {
        const products = res.data;
        dispatch(fetchProductSuccess(products));
      })
      .catch((error) => {
        dispatch(fetchProductFaliure(error.message));
      });
  };
};
export default fetchProductAPI;
