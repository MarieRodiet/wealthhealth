import BirthDateCalendar from '../components/BirthDateCalendar';
import StartDateCalendar from '../components/StartDateCalendar';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, employeesState } from '../features/employeeSlice';

export default function Form() {
  const dispatch = useDispatch();
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

  useEffect(() => {
    console.log('inside use Effect');
  });

  const handleChange = (e) => {
    setEmployeeInfo({ ...employeeInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //if verification of input succeeds, proceed. else, show an error
    setEmployeeInfo(employeeInfo);
    dispatch(addEmployee(employeeInfo));
    const { employeeListState } = useSelector(employeesState);
    if (employeeListState === undefined) {
      console.log('undefined');
    } else console.log(employeeListState);
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
          onChange={handleChange}
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
