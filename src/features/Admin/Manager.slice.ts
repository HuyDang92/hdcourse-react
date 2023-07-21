import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  openDialog: boolean;
  addUserPending: boolean;
  deleteUserPending: boolean;
}
const initialState: AuthState = {
  openDialog: false,
  addUserPending: false,
  deleteUserPending: false,
};
const managerAdminSlice = createSlice({
  name: 'managerAdmin',
  initialState,
  reducers: {
    toggleDialog: (state, action: PayloadAction<boolean>) => {
      state.openDialog = action.payload;
    },
    addUserState: (state, action: PayloadAction<boolean>) => {
      state.addUserPending = action.payload;
    },
    deleteUserState: (state, action: PayloadAction<boolean>) => {
      state.deleteUserPending = action.payload;
    },
  },
});
export const { toggleDialog, addUserState, deleteUserState } = managerAdminSlice.actions;
const managerAdminReducer = managerAdminSlice.reducer;
export default managerAdminReducer;
