import {favProductsReducer} from './../reducers/addfavReducer';
import {configureStore} from '@reduxjs/toolkit';
import {productsReducer} from '../reducers/productsReducer';

export default configureStore({
  reducer: {
    productsList: productsReducer,
    addFavourite: favProductsReducer,
  },
});
