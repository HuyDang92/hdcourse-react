import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { homeApi } from 'features/Home/home.service';

export const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(homeApi.middleware),

  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
