import { Link } from 'react-router-dom';
import { mockedList, columns } from '../data/mockedEmployeeList';
import DataTable from '../components/DataTable';
// import { useSelector } from 'react-redux';
// import { employeesState } from '../features/employeesListSlice';

export default function List() {
  //   const { employeesList } = useSelector(employeesState);
  //   console.log(employeesList);

  return (
    <div className="listContainer">
      <div className="listContainer-content">
        <DataTable data={mockedList} columns={columns} title="Employees" />
      </div>
      <Link className="listContainer-link" to="/">
        Go Back
      </Link>
    </div>
  );
}
