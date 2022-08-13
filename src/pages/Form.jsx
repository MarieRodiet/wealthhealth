import BirthDateCalendar from '../components/BirthDateCalendar';
import StartDateCalendar from '../components/StartDateCalendar';
export default function Form() {
  return (
    <div className="form-container">
      <a className="form-container-employeeLink" href="employee-list.html">
        View Current Employees
      </a>
      <h2 className="form-container-title">Create Employee</h2>
      <form className="form-container-form" action="#" id="create-employee">
        <div>
          <label className="form-container-form-label" htmlFor="first-name">
            First Name
          </label>
          <input
            placeholder="First Name"
            className="form-container-form-input"
            type="text"
            id="first-name"
          />
        </div>
        <div>
          <label className="form-container-form-label" htmlFor="last-name">
            Last Name
          </label>
          <input
            placeholder="Last Name"
            className="form-container-form-input"
            type="text"
            id="last-name"
          />
        </div>
        <BirthDateCalendar />
        <StartDateCalendar />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            className="form-container-form-input"
            id="street"
            type="text"
            placeholder="street"
          />

          <label htmlFor="city">City</label>
          <input className="form-container-form-input" id="city" type="text" placeholder="city" />

          <label htmlFor="state">State</label>
          <select name="state" id="state" placeholder="state">
            <option selected>OR</option>
            <option>FL</option>
            <option>WA</option>
            <option>NV</option>
            <option>NY</option>
          </select>

          <label htmlFor="zip-code">Zip Code</label>
          <input
            className="form-container-form-input"
            id="zip-code"
            type="number"
            placeholder="zipcode"
          />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select name="department" id="department">
          <option selected>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
      </form>

      <button type="submit">Save</button>
    </div>
  );
}
