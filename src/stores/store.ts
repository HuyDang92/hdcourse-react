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
import { lectureApi } from 'features/Course/lecture.service';
import lectureReducer from 'features/Course/Lecture.slice';
import categoryReducer from 'features/Category/Category.slice';

const rootReducers = combineReducers({
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [courseApi.reducerPath]: courseApi.reducer,
  [lectureApi.reducerPath]: lectureApi.reducer,
  [instructorApi.reducerPath]: instructorApi.reducer,
  auth: authReducer,
  manager: managerAdminReducer,
  asideAdmin: layoutAdminReducer,
  courseState: courseReducer,
  categoriesState: categoryReducer,
  lectureState: lectureReducer,
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
    }).concat(
      categoriesApi.middleware,
      userApi.middleware,
      courseApi.middleware,
      instructorApi.middleware,
      lectureApi.middleware
    ),
});
// Tạo persisted store
export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
