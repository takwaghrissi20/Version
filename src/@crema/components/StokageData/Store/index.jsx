import { configureStore } from '@reduxjs/toolkit';
import departmentReducer from './departmentSlice';

export const store = configureStore({
  reducer: {
    department: departmentReducer,
  },
});
