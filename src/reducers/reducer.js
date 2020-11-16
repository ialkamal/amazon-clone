export const initialState = {
  basket: [],
  total: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
        total: state.total + action.payload.price,
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload.id),
        total: state.total - action.payload.price,
      };
    default:
      return state;
  }
};
