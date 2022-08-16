import BirthDateCalendar from '../components/BirthDateCalendar';
import StartDateCalendar from '../components/StartDateCalendar';
export default function Form() {
  return (
    <main className="form-container">
      <a className="form-container-employeeLink" href="employee-list.html">
        View Current Employees
      </a>
      <h1 className="form-container-title">Create Employee</h1>
      <form className="form-container-form" action="#" id="create-employee">
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
            <option value="OR">OR</option>
            <option value="FL">FL</option>
            <option value="WA">WA</option>
            <option value="CA">CA</option>
            <option value="NV">NV</option>
            <option value="OM">OM</option>
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
          className="input"
          list="department-list"
          id="department"
          name="department"
          placeholder="Departement"
        />
        <datalist id="department-list">
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Legal">Legal</option>
        </datalist>
      </form>

      <button type="submit">Save</button>
    </main>
  );
}
