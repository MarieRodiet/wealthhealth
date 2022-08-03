import Calendar from 'react-select-date';

export default function Form() {
  return (
    <div className="form-container">
      <a className="form-container-employeeLink" href="employee-list.html">
        View Current Employees
      </a>
      <h2 className="form-container-title">Create Employee</h2>
      <form className="form-container-form" action="#" id="create-employee">
        <label className="form-container-form-label" htmlFor="first-name">
          First Name
        </label>
        <input
          placeholder="First Name"
          className="form-container-form-input"
          type="text"
          id="first-name"
        />

        <label className="form-container-form-label" htmlFor="last-name">
          Last Name
        </label>
        <input
          placeholder="Last Name"
          className="form-container-form-input"
          type="text"
          id="last-name"
        />

        <label className="form-container-form-label" htmlFor="date-of-birth">
          Date of Birth
        </label>
        <input
          placeholder="date of birth"
          className="form-container-form-input"
          id="date-of-birth"
          type="text"
        />
        <Calendar onSelect={(date) => console.log(date)} />

        <label className="form-container-form-label" htmlFor="start-date">
          Start Date
        </label>
        <input
          placeholder="start date"
          className="form-container-form-input"
          id="start-date"
          type="text"
        />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input className="form-container-form-input" id="street" type="text" />

          <label htmlFor="city">City</label>
          <input className="form-container-form-input" id="city" type="text" />

          <label htmlFor="state">State</label>
          <select name="state" id="state"></select>

          <label htmlFor="zip-code">Zip Code</label>
          <input className="form-container-form-input" id="zip-code" type="number" />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select name="department" id="department">
          <option>Sales</option>
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
