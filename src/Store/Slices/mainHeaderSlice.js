import { createSlice } from '@reduxjs/toolkit';
import { PRODUCT_TABS } from '../../Constants/menu';

const INITIAL_STATE = {
  currentTab: PRODUCT_TABS.All_PRODUCT,
};

const mainHeaderSlice = createSlice({
  name: 'mainHeaderSlice',
  initialState: INITIAL_STATE,
  reducers: {
    updateCurrentTab: (state, action) => {
      state.currentTab = action.payload;
    },
  },
});

export default mainHeaderSlice.reducer;
export const { updateCurrentTab } = mainHeaderSlice.actions;
export const mainHeaderState = (state) => state.mainHeaderSlice;
