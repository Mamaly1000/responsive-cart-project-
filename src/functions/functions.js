export const titlelengthHandler = (title) => {
  const result = title.split(" ");
  let text = "";
  for (let i = 0; i <= 3; i++) {
    text += `${result[i]} `;
  }
  return text;
};
export const verifyingproduct = (state, id) => {
  const Index = !!state.seletedItems.find((item) => item.id === id);
  return Index;
};
export const gettingIndex = (state, id) => {
  const Index = state.seletedItems.findIndex((item) => item.id === id);
  if (Index !== -1) {
    return state.seletedItems[Index].quantity;
  } else {
    return 0;
  }
};
export const calcualtor = (state) => {
  let overalPrice = state
    .reduce((acc, current) => {
      return acc + current.price * current.quantity;
    }, 0)
    .toFixed(2);
  let overalItems = state.reduce((acc, current) => {
    return acc + current.quantity;
  }, 0);

  return { overalPrice, overalItems };
};
