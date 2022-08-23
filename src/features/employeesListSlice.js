import { createSlice } from '@reduxjs/toolkit';

export const employeeListReducer = createSlice({
  name: 'employeeList',
  initialState: [],
  reducers: {
    clearEmployeeList: (state) => {
      state.employeeList = [];
    },
    addEmployee: (state, action) => {
      state.push(action.payload);
      console.log('inside addEmployee');
      return state;
    }
  }
});

export const { addEmployee } = employeeListReducer.actions;
export const employeesState = (state) => state.employeeList;
