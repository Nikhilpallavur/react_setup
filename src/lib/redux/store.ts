import { configureStore } from '@reduxjs/toolkit';
import permissionsReducer from './slices/permissionsSlice';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    permissions: permissionsReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
