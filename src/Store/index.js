import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productSlice from './Slices/productSlice';
import mainHeaderSlice from './Slices/mainHeaderSlice';
import categorySlice from './Slices/categorySlice';

const rootReducer = combineReducers({
  productSlice,
  mainHeaderSlice,
  categorySlice,
});

export default configureStore({
  reducer: rootReducer,
});
