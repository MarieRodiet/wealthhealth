import BirthDateCalendar from '../components/BirthDateCalendar';
import StartDateCalendar from '../components/StartDateCalendar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addInputData } from '../features/newEmployeeSlice';
import { addEmployee, employeesState } from '../features/employeesListSlice';

export default function Form() {
  const dispatch = useDispatch();
  const { first_name } = useSelector(employeesState);
  const [employeeInfo, setEmployeeInfo] = useState({
    first_name: '',
    last_name: '',
    birth_date: '',
    start_date: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    department: ''
  });

  const handleInputChange = (e) => {
    console.log(e.target.name);
    setEmployeeInfo({ ...employeeInfo, [e.target.name]: e.target.value });
    dispatch(addInputData(employeeInfo));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //if verification of input succeeds, proceed. else, show an error
    dispatch(addEmployee(employeeInfo));
    console.log(first_name);
  };
  return (
    <main className="form-container">
      <Link className="form-container-employeeLink" to="/employeelist" replace="true">
        View Current Employees
      </Link>
      <h1 className="form-container-title">Create Employee</h1>
      <form className="form-container-form" action="#" id="create-employee" onSubmit={handleSubmit}>
        <div>
          <label className="form-container-form-label" htmlFor="first-name">
            First Name
          </label>
          <input
            placeholder="First Name"
            className="input"
            type="text"
            id="first-name"
            name="first_name"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="form-container-form-label" htmlFor="last-name">
            Last Name
          </label>
          <input
            placeholder="Last Name"
            className="input"
            type="text"
            id="last-name"
            name="last_name"
            onChange={handleInputChange}
          />
        </div>
        <BirthDateCalendar />

        <StartDateCalendar />

        <fieldset className="address">
          <legend>Address</legend>

          <label className="hide" htmlFor="street">
            Street
          </label>
          <input
            className="input"
            id="street"
            type="text"
            placeholder="street"
            name="street"
            onChange={handleInputChange}
          />

          <label className="hide" htmlFor="city">
            City
          </label>
          <input
            className="input"
            id="city"
            type="text"
            placeholder="city"
            name="city"
            onChange={handleInputChange}
          />

          <label className="hide" htmlFor="state">
            State
          </label>
          <input
            className="input"
            list="states-list"
            id="state"
            placeholder="state"
            name="state"
            onChange={handleInputChange}
          />
          <datalist id="states-list">
            <option value="OR" />
            <option value="FL" />
            <option value="WA" />
            <option value="CA" />
            <option value="NV" />
            <option value="OM" />
          </datalist>

          <label className="hide" htmlFor="zip-code">
            Zip Code
          </label>
          <input
            className="input"
            id="zip-code"
            type="number"
            placeholder="zipcode"
            name="zipcode"
            onChange={handleInputChange}
          />
        </fieldset>
        <label className="hide" htmlFor="department">
          Department
        </label>
        <input
          className="input department"
          list="department-list"
          id="department"
          name="department"
          placeholder="Departement"
          onChange={handleInputChange}
        />
        <datalist id="department-list">
          <option value="Sales" />
          <option value="Marketing" />
          <option value="Engineering" />
          <option value="Human Resources" />
          <option value="Legal" />
        </datalist>
        <button type="submit">Save</button>
      </form>
    </main>
  );
}
