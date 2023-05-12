const INITIAL_STATE = [];

export const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return [...state, ...action.payload];
    default:
      return state;
  }
};
