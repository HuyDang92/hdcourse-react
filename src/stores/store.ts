import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { homeApi } from 'features/Home/home.service';
import { userApi } from 'features/Auth/user.service';
import authReducer from '../features/Auth/auth.slice';
export const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    auth: authReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homeApi.middleware, userApi.middleware),

  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
