import { createSlice } from '@reduxjs/toolkit';
import ProductsApi from '../../Services/ProductsApi';

const INITIAL_STATE = {
  productsList: [],
  selectedProductData: {},
  cartList: [],
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState: INITIAL_STATE,
  reducers: {
    updateProductsList: (state, action) => {
      state.productsList = action.payload;
    },
    updateSelectedProduct: (state, action) => {
      state.selectedProductData = action.payload;
    },
    updateCartList: (state, action) => {
      state.cartList = action.payload;
    },
  },
});

export default productSlice.reducer;

export const { updateProductsList, updateSelectedProduct, updateCartList } =
  productSlice.actions;

export const productsState = (state) => state.productSlice;

export function getProductList() {
  return async function (dispatch, getState) {
    const productsApi = new ProductsApi();
    productsApi
      .fetchProductData()
      .then(({ data }) => {
        dispatch(updateProductsList(data));
      })
      .catch((err) => console.log(err));
  };
}

export function getProductsForCategory(category) {
  return async function (dispatch) {
    const productsApi = new ProductsApi();
    productsApi
      .fetchProductsForCategory(category)
      .then(({ data }) => {
        dispatch(updateProductsList(data));
      })
      .catch((err) => console.log(err));
  };
}

export function getProductDetails(id) {
  return async function (dispatch) {
    const productsApi = new ProductsApi();
    productsApi
      .fetchProductDetails(id)
      .then(({ data }) => {
        dispatch(updateSelectedProduct(data));
      })
      .catch((err) => console.log(err));
  };
}
