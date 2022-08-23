import { createSlice } from '@reduxjs/toolkit';

export const employeeListReducer = createSlice({
  name: 'employeeList',
  initialState: [
    {
      first_name: 'Marie',
      last_name: 'Moore',
      birth_date: 'asdf',
      start_date: 'asdf',
      street: 'asdf',
      city: 'adfd',
      state: 'asdf',
      zipcode: 'asdf',
      department: 'asdf'
    }
  ],
  reducers: {
    clearEmployeeList: (state) => {
      state.employeeList = [];
    },
    addEmployee: (state, action) => {
      state.push(action.payload);
      return state;
    }
  }
});

export const { addEmployee } = employeeListReducer.actions;
export const employeesState = (state) => state.employeeList;
