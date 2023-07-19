import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IState {
  open: number;
  active: number;
  title: string;
  subTitle: string;
}
const initialState: IState = {
  open: 1,
  active: 1,
  title: 'Overview',
  subTitle: 'Thống kê',
};
const layoutAdminSlice = createSlice({
  name: 'layoutAdmin',
  initialState,
  reducers: {
    Open: (state, action: PayloadAction<number>) => {
      state.open = action.payload;
    },
    Active: (state, action: PayloadAction<number>) => {
      state.active = action.payload;
    },
    Title: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    subTitle: (state, action: PayloadAction<string>) => {
      state.subTitle = action.payload;
    },
  },
});
export const { Open, Active, Title, subTitle } = layoutAdminSlice.actions;
const layoutAdminReducer = layoutAdminSlice.reducer;
export default layoutAdminReducer;
