const initialState = {
  loading: false,
  products: [],
  error: "",
};
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetch_Product_Request":
      return { loading: true, ...state };
    case "fetch_Product_Success":
      return { loading: false, products: action.payload };
    case "fetch_Product_Faliure":
      return { loading: false, products: [], error: action.payload };
    default:
      return state;
  }
};
export default ProductReducer;
