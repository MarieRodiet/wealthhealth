import { configureStore } from '@reduxjs/toolkit';
import { employeeListReducer } from './employeesListSlice.js';
import { newEmployeeReducer } from './newEmployeeSlice.js';

export const store = configureStore({
  reducer: {
    employeeList: employeeListReducer.reducer,
    newEmployee: newEmployeeReducer.reducer
  }
});
