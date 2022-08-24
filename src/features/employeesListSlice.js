import { createSlice } from '@reduxjs/toolkit';

export const employeesListReducer = createSlice({
  name: 'employeesList',
  initialState: [],
  reducers: {
    clearEmployeeList: (state) => {
      state.employeesList = [];
    },
    addEmployee: (state, action) => {
      state.push(action.payload);
      return state;
    }
  }
});

export const { addEmployee } = employeesListReducer.actions;
export const employeesState = (state) => state.employeesList;
