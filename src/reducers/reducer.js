export const initialState = {
  basket: [],
  total: 0,
  user: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
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
