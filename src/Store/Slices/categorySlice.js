import { createSlice } from '@reduxjs/toolkit';
import ProductsApi from '../../Services/ProductsApi';

const INITIAL_STATE = {
  category: [],
};

const categorySlice = createSlice({
  name: 'categorySlice',
  initialState: INITIAL_STATE,
  reducers: {
    updateCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export default categorySlice.reducer;
export const { updateCategory } = categorySlice.actions;
export const categoryState = (state) => state.categorySlice;

export function getCategory() {
  return async function (dispatch, getState) {
    const productsApi = new ProductsApi();
    productsApi
      .fetchCategories()
      .then(({ data }) => {
        dispatch(updateCategory(data));
      })
      .catch((err) => console.log(err));
  };
}
