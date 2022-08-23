import { createSlice } from '@reduxjs/toolkit';

export const newEmployeeReducer = createSlice({
  name: 'newEmployee',
  initialState: {
    first_name: 'Marie',
    last_name: 'Moore',
    birth_date: 'asdf',
    start_date: 'asdf',
    street: 'asdf',
    city: 'adfd',
    state: 'asdf',
    zipcode: 'asdf',
    department: 'asdf'
  },
  reducers: {
    addStartDate: (state, action) => {
      state.start_date = action.payload;
      return state;
    },
    addBirthDate: (state, action) => {
      state.birth_date = action.payload;
      return state;
    },
    addInputData: (state, action) => {
      (state.first_name = action.payload.first_name),
        (state.last_name = action.payload.last_name),
        (state.street = action.payload.street),
        (state.city = action.payload.city),
        (state.zipcode = action.payload.zipcode),
        (state.department = action.payload.department);
      console.log('inside addInputData');
      return state;
    },
    clearNewEmployee: (state) => {
      (state.first_name = ''),
        (state.last_name = ''),
        (state.birth_date = ''),
        (state.start_date = ''),
        (state.street = ''),
        (state.city = ''),
        (state.state = ''),
        (state.zipcode = ''),
        (state.department = '');
      return state;
    }
  }
});

export const { addStartDate, addBirthDate, clearNewEmployee, addInputData } =
  newEmployeeReducer.actions;
export const newEmployeeState = (state) => state.newEmployee;
