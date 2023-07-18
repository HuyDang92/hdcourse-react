import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  openDialog: boolean;
}
const initialState: AuthState = {
  openDialog: false,
};
const managerAdminSlice = createSlice({
  name: 'managerAdmin',
  initialState,
  reducers: {
    toggleDialog: (state, action: PayloadAction<boolean>) => {
      state.openDialog = action.payload;
    },
  },
});
export const { toggleDialog } = managerAdminSlice.actions;
const managerAdminReducer = managerAdminSlice.reducer;
export default managerAdminReducer;
