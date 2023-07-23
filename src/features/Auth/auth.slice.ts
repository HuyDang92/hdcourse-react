import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserInfo } from 'types/User';
type UserOmit = Omit<IUserInfo, 'createdAt' | 'updatedAt'>;

export interface AuthState {
  isLoggedIn: boolean;
  currentUser?: UserOmit | null;
}
const initialState: AuthState = {
  isLoggedIn: false,
  currentUser: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserOmit>) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    update: (state, action: PayloadAction<UserOmit>) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.currentUser = null;
    },
  },
});
export const { login, update, logout } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
