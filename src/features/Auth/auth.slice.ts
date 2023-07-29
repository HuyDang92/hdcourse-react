import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserInfo, IWishList } from 'types/User';
type UserOmit = Omit<IUserInfo, 'createdAt' | 'updatedAt'>;
type WishListOmit = Omit<IWishList, 'createdAt' | 'updatedAt'>;

export interface AuthState {
  isLoggedIn: boolean;
  currentUser?: UserOmit | null;
  wishLists: WishListOmit[];
}
const initialState: AuthState = {
  isLoggedIn: false,
  currentUser: null,
  wishLists: [],
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
    add: (state, action: PayloadAction<WishListOmit>) => {
      state.isLoggedIn = false;
      state.currentUser = null;
    },

    updateWishList: (state, action: PayloadAction<WishListOmit>) => {
      const { idCourse } = action.payload;
      const existingIndex = state.wishLists.findIndex((item) => item.idCourse === idCourse);
      if (existingIndex !== -1) {
        // Nếu phần tử đã tồn tại, xóa nó khỏi mảng wishLists
        state.wishLists.splice(existingIndex, 1);
      } else {
        // Nếu phần tử chưa tồn tại, thêm nó vào mảng wishLists
        state.wishLists.push(action.payload);
      }
    },
  },
});
export const { login, update, logout, updateWishList } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
