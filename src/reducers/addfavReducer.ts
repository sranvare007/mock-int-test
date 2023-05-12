const INITIAL_STATE = [];

export const favProductsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_FAV':
      return [...state, action.payload];
    default:
      return state;
  }
};
