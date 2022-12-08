import { calcualtor } from "../../functions/functions";

const initialcart = {
  seletedItems: [],
  overalItems: 10,
  overalPrice: 0,
  checkout: false,
};

const Cartreducer = (state=initialcart, action) => {
  switch (action.type) {
    case "ADD-ITEM":
      if (!state.seletedItems.find((item) => item.id === action.payload.id)) {
        state.seletedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        checkout: false,
        seletedItems: [...state.seletedItems],
        ...calcualtor(state.seletedItems),
      };
    case "REMOVE-ITEM":
      const newSelectedItems = state.seletedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        seletedItems: [...newSelectedItems],
        ...calcualtor(newSelectedItems),
      };
    case "INCREASE":
      const IndexI = state.seletedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.seletedItems[IndexI].quantity++;
      return {
        ...state,
        ...calcualtor(state.seletedItems),
      };
    case "DECREASE":
      const IndexD = state.seletedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.seletedItems[IndexD].quantity--;
      return {
        ...state,
        ...calcualtor(state.seletedItems),
      };
    case "CHECKOUT":
      return {
        seletedItems: [],
        overalPrice: 0,
        overalItems: 0,
        checkout: true,
      };
    case "CLEAR":
      return {
        seletedItems: [],
        overalPrice: 0,
        overalItems: 0,
        checkout: false,
      };
    default:
      return {
        seletedItems: [],
        overalPrice: 0,
        overalItems: 0,
        checkout: false,
      };
  }
};
export default Cartreducer