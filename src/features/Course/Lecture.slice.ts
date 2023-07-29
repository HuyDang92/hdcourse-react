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
const lectureSlice = createSlice({
  name: 'lectureState',
  initialState,
  reducers: {
    Open: (state, action: PayloadAction<number>) => {
      state.open = action.payload;
    },
    Active: (state, action: PayloadAction<number>) => {
      state.active = action.payload;
    },
  },
});
export const { Open, Active } = lectureSlice.actions;
const lectureReducer = lectureSlice.reducer;
export default lectureReducer;
