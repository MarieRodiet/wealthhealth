import { configureStore } from '@reduxjs/toolkit';
import { employeesListReducer } from './employeesListSlice.js';

export const store = configureStore({
  reducer: {
    employeesList: employeesListReducer.reducer
  }
});
