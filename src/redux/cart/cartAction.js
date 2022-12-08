const addProduct = (product) => {
  return { type: "ADD-ITEM", payload: product };
};
const removeProduct = (product) => {
  return { type: "REMOVE-ITEM", payload: product };
};
const increaseProduct = (product) => {
  return { type: "INCREASE", payload: product };
};
const decreaseProduct = (product) => {
  return { type: "DECREASE", payload: product };
};
const checkout = () => {
  return { type: "CHECKOUT" };
};
const clear = () => {
  return { type: "CLEAR" };
};
export {
  addProduct,
  removeProduct,
  increaseProduct,
  decreaseProduct,
  checkout,
  clear,
};
