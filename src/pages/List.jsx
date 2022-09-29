import { Link } from 'react-router-dom';
import { columns, mockedList } from '../data/mockedEmployeeList';
import DataTable from 'table-react-component-library';
import './../../node_modules/table-react-component-library/dist/style.css';
import { useSelector } from 'react-redux';
import { employeesState } from '../features/employeesListSlice';

export default function List() {
  const { employeesList } = useSelector(employeesState);
  console.log(employeesList);

  function showSelection(selection) {
    console.log(selection);
  }
  return (
    <div className="list">
      <DataTable
        data={[...mockedList]}
        columns={columns}
        title="Employees"
        theme="light"
        unableSelection={true}
        unableMultipleSelection={true}
        getSelection={showSelection}
      />

      <Link className="listContainer-link" to="/">
        Go Back
      </Link>
    </div>
  );
}
