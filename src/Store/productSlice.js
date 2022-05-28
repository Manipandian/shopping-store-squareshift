import { createSlice } from "@reduxjs/toolkit";
import ProductsApi from "../Services/ProductsApi";

const INITIAL_STATE = {
    productsList: []
}

const productSlice = createSlice({
    name: 'productSlice',
    initialState: INITIAL_STATE,
    reducers: {
        updateProductsList: (state, action) => {
            state.productsList = action.payload;
        }
    }
});

export default productSlice.reducer;

export const { updateProductsList } = productSlice.actions;

export const productsState = (state) => state.productSlice;

export function getProductList() {
    return async function(dispatch, getState) {
        const productsApi = new ProductsApi();
        productsApi.fetchProductData()
        .then(({ data }) => {
            dispatch(updateProductsList(data));
        })
        .catch((err) => console.log(err));
    }
}