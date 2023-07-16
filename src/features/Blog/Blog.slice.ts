import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { IUserInfo } from 'types/User';
const initialState = {};

const homeSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<IUserInfo>) => {},
  },
});
export const { update } = homeSlice.actions;
const homeReducer = homeSlice.reducer;
export default homeReducer;
