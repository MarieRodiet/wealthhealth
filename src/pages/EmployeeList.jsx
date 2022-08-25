import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { employeesState } from '../features/employeesListSlice';
import { useReactTable } from '@tanstack/react-table';
export default function EmployeeList() {
  const { employeesList } = useSelector(employeesState);
  console.log(employeesList);
  const table = useReactTable();
  console.log(table);

  return (
    <div>
      <h1>Current Employees</h1>
      <table id="employee-table" className="display">
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Start Date</td>
            <td>Department</td>
            <td>Date of Birth</td>
            <td>Street</td>
            <td>City</td>
            <td>State</td>
            <td>Zip Code</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Marie</td>
            <td>Moore</td>
            <td>01/01/2022</td>
            <td>Web dev</td>
            <td>07/08/1989</td>
            <td>Route de Dammartin</td>
            <td>Mortcerf</td>
            <td>OR</td>
            <td>77163</td>
          </tr>
        </tbody>
      </table>
      <Link to="/">Home</Link>
    </div>
  );
}
