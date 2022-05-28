import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productSlice from "./productSlice";


const rootReducer = combineReducers({
    productSlice: productSlice
})

export default configureStore({
    reducer: rootReducer
})