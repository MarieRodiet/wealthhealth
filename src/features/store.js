import { configureStore } from '@reduxjs/toolkit';
import { employeeListReducer } from './employeeSlice.js';

export const store = configureStore({
  reducer: employeeListReducer
});
