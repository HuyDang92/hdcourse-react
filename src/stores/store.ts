import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { categoriesApi } from 'features/Category/category.service';
import { userApi } from 'features/Auth/auth.service';
import authReducer from '../features/Auth/auth.slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducers = combineReducers({
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  auth: authReducer,
});
// Cấu hình Redux Persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};
// Tạo persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Redux persist
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(categoriesApi.middleware, userApi.middleware),
});
// Tạo persisted store
export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
