import { Link } from 'react-router-dom';
import { columns } from '../data/mockedEmployeeList';
import DataTable from 'table-react-component-library';
import './../../node_modules/table-react-component-library/dist/style.css';
import { useSelector } from 'react-redux';
import { employeesState } from '../features/employeesListSlice';

export default function List() {
  const { employeesList } = useSelector(employeesState);

  function showSelection(selection) {
    console.log(selection);
  }
  return (
    <div className="list">
      <DataTable
        data={[...employeesList]}
        columns={columns}
        title="Employees"
        theme="light"
        getSelection={showSelection}
      />

      <Link className="listContainer-link" to="/">
        Go Back
      </Link>
    </div>
  );
}
