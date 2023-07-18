import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  active: boolean;
}
const initialState: AuthState = {
  active: false,
};
const layoutAdminSlice = createSlice({
  name: 'layoutAdmin',
  initialState,
  reducers: {
    active: (state, action: PayloadAction<any>) => {
      state.active = true;
    },
  },
});
export const { active } = layoutAdminSlice.actions;
const layoutAdminReducer = layoutAdminSlice.reducer;
export default layoutAdminReducer;
