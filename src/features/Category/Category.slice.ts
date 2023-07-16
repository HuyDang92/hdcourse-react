import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialState = {};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<any>) => {},
  },
});
export const { update } = categoriesSlice.actions;
const homeReducer = categoriesSlice.reducer;
export default homeReducer;
