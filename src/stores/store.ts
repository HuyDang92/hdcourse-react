import { userApi } from 'features/Auth/auth.service';
import { courseApi } from 'features/Course/course.service';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { categoriesApi } from 'features/Category/category.service';
import authReducer from '../features/Auth/auth.slice';
import managerAdminReducer from '../features/Admin/Manager.slice';
import layoutAdminReducer from '../features/Admin/Aside.slice';
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
import courseReducer from 'features/Course/Course.slice';
import { instructorApi } from 'features/Instructor/Instructor.service';

const rootReducers = combineReducers({
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [courseApi.reducerPath]: courseApi.reducer,
  [instructorApi.reducerPath]: instructorApi.reducer,
  auth: authReducer,
  manager: managerAdminReducer,
  asideAdmin: layoutAdminReducer,
  courseState: courseReducer,
});
// Cấu hình Redux Persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'courseState'],
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
    }).concat(
      categoriesApi.middleware,
      userApi.middleware,
      courseApi.middleware,
      instructorApi.middleware
    ),
});
// Tạo persisted store
export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
