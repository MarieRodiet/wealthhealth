import { Link } from 'react-router-dom';
import { columns } from '../data/mockedEmployeeList';
import DataTable from 'table-react-component-library';
import './../../node_modules/table-react-component-library/dist/style.css';
import { useSelector } from 'react-redux';
import { employeesState } from '../features/employeesListSlice';

/**
 *
 * @returns Link to the form + DataTable including:
 * Pagination
 * Search
 * Table
 *
 * @param {array} data - The data to be displayed
 * @param {array} columns - The column objects
 * @param {string} title - The title
 * @param {string} theme - The theme - light or dark
 * @param {boolean} unableSelection - Unabling the selection of rows and returning their values
 */
export default function List() {
  const { employeesList } = useSelector(employeesState);

  return (
    <div className="list">
      <DataTable
        data={[...employeesList]}
        columns={columns}
        title="Employees"
        theme="light"
        unableSelection={false}
      />

      <Link className="listContainer-link" to="/">
        Go Back
      </Link>
    </div>
  );
}
