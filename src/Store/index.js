import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productSlice from './Slices/productSlice';
import categorySlice from './Slices/categorySlice';

const rootReducer = combineReducers({
  productSlice,
  categorySlice,
});

export default configureStore({
  reducer: rootReducer,
});
