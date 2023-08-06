import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IState {
  open: number;
  active: number;
  title: string;
  subTitle: string;
  linkPre: string;
}
const initialState: IState = {
  open: 1,
  active: 1,
  title: 'Overview',
  subTitle: 'Thống kê',
  linkPre: '',
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
    saveLink: (state, action: PayloadAction<any>) => {
      state.linkPre = action.payload;
    },
  },
});
export const { Open, Active, saveLink } = lectureSlice.actions;
const lectureReducer = lectureSlice.reducer;
export default lectureReducer;
