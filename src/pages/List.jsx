import { Link } from 'react-router-dom';
import { columns } from '../data/mockedEmployeeList';
import DataTable from 'table-react-component-library';
import './../../node_modules/table-react-component-library/dist/style.css';
import { useSelector } from 'react-redux';
import { employeesState } from '../features/employeesListSlice';

export default function List() {
  const { employeesList } = useSelector(employeesState);
  console.log(employeesList);

  return (
    <div className="list">
      {/* <DataTable title="mon titre" theme="dark" /> */}
      <DataTable data={employeesList} columns={columns} title="Employees" theme="light" />
      <Link className="listContainer-link" to="/">
        Go Back
      </Link>
    </div>
  );
}
