import { createSlice } from '@reduxjs/toolkit';

export const newEmployeeReducer = createSlice({
  name: 'newEmployee',
  initialState: {
    FirstName: '',
    LastName: '',
    BirthDate: '',
    StartDate: '',
    Street: '',
    City: '',
    State: '',
    Zipcode: '',
    Department: ''
  },
  reducers: {
    addStartDate: (state, action) => {
      state.StartDate = action.payload;
      return state;
    },
    addBirthDate: (state, action) => {
      state.BirthDate = action.payload;
      return state;
    },
    addInputData: (state, action) => {
      (state.FirstName = action.payload.first_name),
        (state.LastName = action.payload.last_name),
        (state.Street = action.payload.street),
        (state.City = action.payload.city),
        (state.Zipcode = action.payload.zipcode),
        (state.State = action.payload.state),
        (state.Department = action.payload.department);
      return state;
    },
    clearNewEmployee: (state) => {
      console.log('clear New Employee');
      (state.FirstName = ''),
        (state.LastName = ''),
        // (state.BirthDate = ''),
        // (state.StartDate = ''),
        (state.Street = ''),
        (state.City = ''),
        (state.State = ''),
        (state.Zipcode = ''),
        (state.Department = '');
      return state;
    }
  }
});

export const { addStartDate, addBirthDate, clearNewEmployee, addInputData } =
  newEmployeeReducer.actions;
export const newEmployeeState = (state) => state.newEmployee;
