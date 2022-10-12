import { configureStore } from '@reduxjs/toolkit';
import filter from './sleces/filterSlice';

export const store = configureStore({
  reducer: {
    filter,
  },
});