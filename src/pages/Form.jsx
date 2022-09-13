import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../features/employeesListSlice';
import Modal from '../components/Modal';
import { states, departments } from '../data/mockedData';
import { useForm } from 'react-hook-form';
import Calendar from '../components/Calendar';

export default function Form() {
  const dispatch = useDispatch();
  const [isCreated, setIsCreated] = useState(false);
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    dispatch(addEmployee(data));
    setIsCreated(true);
  };

  const currentDate =
    new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

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
        onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="form-container-form-label" htmlFor="FirstName">
            First Name
          </label>
          <input
            required
            placeholder="First Name"
            className="input"
            type="text"
            id="FirstName"
            name="FirstName"
            {...register('FirstName', { required: true }, { pattern: /^[A-Za-z]+$/i })}
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
            id="LastName"
            name="LastName"
            {...register('LastName', { required: true }, { pattern: /^[A-Za-z]+$/i })}
          />
        </div>

        <Calendar
          currentDate={currentDate}
          setValue={setValue}
          label={'BirthDate'}
          name="birthdate"
        />
        <Calendar
          currentDate={currentDate}
          setValue={setValue}
          label={'StartDate'}
          name="startdate"
        />

        <label className="hide" htmlFor="Department">
          Department
        </label>
        <input
          required
          className="input department"
          list="department-list"
          type="text"
          id="Department"
          name="Department"
          placeholder="Choose Departement"
          {...register('Department', { required: true })}
        />
        <datalist id="department-list">
          {departments.map((item) => (
            <option key={item} value={item} />
          ))}
        </datalist>
        <fieldset className="address">
          <legend>Address</legend>

          <label className="hide" htmlFor="Street">
            Street
          </label>
          <input
            required
            className="input"
            id="Street"
            type="text"
            placeholder="Street"
            name="Street"
            {...register('Street', { required: true })}
          />

          <label className="hide" htmlFor="City">
            City
          </label>
          <input
            required
            className="input"
            id="City"
            type="text"
            placeholder="City"
            name="City"
            {...register('City', { required: true, maxLength: 20 })}
          />

          <label className="hide" htmlFor="State">
            State
          </label>
          <input
            required
            className="input"
            list="states-list"
            id="State"
            type="text"
            placeholder="Choose State"
            name="State"
            {...register('State', { required: true })}
          />
          <datalist id="states-list">
            {states.map((item) => (
              <option key={item} value={item} />
            ))}
          </datalist>

          <label className="hide" htmlFor="Zipcode">
            Zip Code
          </label>
          <input
            required
            className="input"
            id="Zipcode"
            type="number"
            placeholder="Zipcode"
            name="Zipcode"
            {...register('Zipcode', { required: true }, { min: 1000, max: 99999 })}
          />
        </fieldset>

        <button type="submit" className="form-container-form-btn">
          Save
        </button>
      </form>
      {isCreated ? <Modal text={'Employee Created!'} /> : null}
    </main>
  );
}
