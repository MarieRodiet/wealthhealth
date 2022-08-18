import BirthDateCalendar from '../components/BirthDateCalendar';
import StartDateCalendar from '../components/StartDateCalendar';
import { Link } from 'react-router-dom';

export default function Form() {
  return (
    <main className="form-container">
      <Link className="form-container-employeeLink" to="/employeelist" replace="true">
        View Current Employees
      </Link>
      <h1 className="form-container-title">Create Employee</h1>
      <form
        className="form-container-form"
        action="#"
        id="create-employee"
        onSubmit={(event) => console.log(event)}>
        <div>
          <label className="form-container-form-label" htmlFor="first-name">
            First Name
          </label>
          <input placeholder="First Name" className="input" type="text" id="first-name" />
        </div>
        <div>
          <label className="form-container-form-label" htmlFor="last-name">
            Last Name
          </label>
          <input placeholder="Last Name" className="input" type="text" id="last-name" />
        </div>
        <BirthDateCalendar />
        <StartDateCalendar />

        <fieldset className="address">
          <legend>Address</legend>

          <label className="hide" htmlFor="street">
            Street
          </label>
          <input className="input" id="street" type="text" placeholder="street" />

          <label className="hide" htmlFor="city">
            City
          </label>
          <input className="input" id="city" type="text" placeholder="city" />

          <label className="hide" htmlFor="state">
            State
          </label>
          <input className="input" list="states-list" id="state" name="state" placeholder="state" />
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
          <input className="input" id="zip-code" type="number" placeholder="zipcode" />
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
        />
        <datalist id="department-list">
          <option value="Sales" />
          <option value="Marketing" />
          <option value="Engineering" />
          <option value="Human Resources" />
          <option value="Legal" />
        </datalist>
      </form>

      <button type="submit">Save</button>
    </main>
  );
}
