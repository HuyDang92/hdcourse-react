import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserInfo } from 'types/User';
export interface AuthState {
  isLoggedIn: boolean;
  currentUser?: IUserInfo | null;
}
const initialState: AuthState = {
  isLoggedIn: false,
  currentUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUserInfo>) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.currentUser = null;

    },
  },
});
export const { login, logout } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
