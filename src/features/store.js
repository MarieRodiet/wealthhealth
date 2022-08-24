import { configureStore } from '@reduxjs/toolkit';
import { employeesListReducer } from './employeesListSlice.js';
import { newEmployeeReducer } from './newEmployeeSlice.js';

export const store = configureStore({
  reducer: {
    employeesList: employeesListReducer.reducer,
    newEmployee: newEmployeeReducer.reducer
  }
});
