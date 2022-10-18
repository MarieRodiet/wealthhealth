import { Link } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../features/employeesListSlice';
import { states, departments } from '../data/mockedFormData';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

/**
 *
 * @returns data object from the form to the Redux store
 * Shows modal
 * Once modal clicked, it navigates to the List page
 */
export default function Form() {
  const Modal = lazy(() => import('@mariemoore/modal-react-component-library-with-vite'));
  const Calendar = lazy(() => import('../components/Calendar'));

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [navigate, setNavigate] = useState(false);
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    dispatch(addEmployee(data));
    setShowModal(true);
  };

  const handleModal = () => {
    setNavigate(true);
  };

  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        {navigate && <Navigate to="/employeelist" replace="true" />}
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

            <Calendar setValue={setValue} label={'BirthDate'} name="birthdate" />

            <Calendar setValue={setValue} label={'StartDate'} name="startdate" />

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
          {showModal ? <Modal label={'Employee Created!'} closeModal={handleModal} /> : null}
        </main>
      </Suspense>
    </>
  );
}
