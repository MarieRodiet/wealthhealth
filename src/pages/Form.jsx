import BirthDateCalendar from '../components/BirthDateCalendar';
import StartDateCalendar from '../components/StartDateCalendar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addInputData, newEmployeeState, clearNewEmployee } from '../features/newEmployeeSlice';
import { addEmployee } from '../features/employeesListSlice';
import Modal from '../components/Modal';

export default function Form() {
  const dispatch = useDispatch();
  const states = [
    'AL',
    'AK',
    'AS',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'DC',
    'FM',
    'FL',
    'GA',
    'GU',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MH',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'MP',
    'OH',
    'OK',
    'OR',
    'PW',
    'PA',
    'PR',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VI',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY'
  ];
  const departments = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'];
  const { FirstName, LastName, Street, City, State, Zipcode, Department, StartDate, BirthDate } =
    useSelector(newEmployeeState);
  const [employeeInfo, setEmployeeInfo] = useState({
    first_name: '',
    last_name: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    department: ''
  });
  const [isCreated, setIsCreated] = useState(false);

  const handleInputChange = (e) => {
    setEmployeeInfo({ ...employeeInfo, [e.target.name]: e.target.value });
    dispatch(addInputData(employeeInfo));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addEmployee({
        FirstName,
        LastName,
        Street,
        City,
        State,
        Zipcode,
        Department,
        StartDate,
        BirthDate
      })
    );
    setIsCreated(true);
    dispatch(clearNewEmployee());
  };

  const currentDate =
    new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

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
            required
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
            required
            placeholder="Last Name"
            className="input"
            type="text"
            id="last-name"
            name="last_name"
            onChange={handleInputChange}
          />
        </div>
        <BirthDateCalendar currentDate={currentDate} />
        <StartDateCalendar currentDate={currentDate} />

        <label className="hide" htmlFor="department">
          Department
        </label>
        <input
          required
          className="input department"
          list="department-list"
          type="text"
          id="department"
          name="department"
          placeholder="Choose Departement"
          onChange={handleInputChange}
        />
        <datalist id="department-list">
          {departments.map((item) => (
            <option key={item} value={item} />
          ))}
        </datalist>
        <fieldset className="address">
          <legend>Address</legend>

          <label className="hide" htmlFor="street">
            Street
          </label>
          <input
            required
            className="input"
            id="street"
            type="text"
            placeholder="Street"
            name="street"
            onChange={handleInputChange}
          />

          <label className="hide" htmlFor="city">
            City
          </label>
          <input
            required
            className="input"
            id="city"
            type="text"
            placeholder="City"
            name="city"
            onChange={handleInputChange}
          />

          <label className="hide" htmlFor="state">
            State
          </label>
          <input
            required
            className="input"
            list="states-list"
            id="state"
            type="text"
            placeholder="Choose State"
            name="state"
            onChange={handleInputChange}
          />
          <datalist id="states-list">
            {states.map((item) => (
              <option key={item} value={item} />
            ))}
          </datalist>

          <label className="hide" htmlFor="zip-code">
            Zip Code
          </label>
          <input
            required
            className="input"
            id="zip-code"
            type="number"
            placeholder="Zipcode"
            name="zipcode"
            onChange={handleInputChange}
          />
        </fieldset>

        <button type="submit" className="form-container-form-btn">
          Save
        </button>
      </form>
      {isCreated ? <Modal /> : null}
    </main>
  );
}
