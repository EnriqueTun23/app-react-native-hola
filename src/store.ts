import {configureStore} from '@reduxjs/toolkit';
import appSlice from './slices/appSlice';

export const store = configureStore({
  reducer: {
    appSlice: appSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: true,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
