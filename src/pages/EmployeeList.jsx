import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Table from './Table';
import { useMemo } from 'react';
import { employeesState } from '../features/employeesListSlice';
// import { list } from '../mock/mockedData';

export default function EmployeeList() {
  const { employeesList } = useSelector(employeesState);

  const columns = useMemo(() => [
    {
      Header: 'Employees',
      columns: [
        {
          Header: 'First Name',
          accessor: 'FirstName',
          Cell: ({ cell: { value } }) => value || '-'
        },
        {
          Header: 'Last Name',
          accessor: 'LastName',
          Cell: ({ cell: { value } }) => value || '-'
        },
        {
          Header: 'Birth Date',
          accessor: 'BirthDate',
          Cell: ({ cell: { value } }) => value || '-'
        },
        {
          Header: 'Start Date',
          accessor: 'StartDate',
          Cell: ({ cell: { value } }) => value || '-'
        },
        {
          Header: 'Street',
          accessor: 'Street',
          Cell: ({ cell: { value } }) => (value ? { value } : '-')
        },
        {
          Header: 'City',
          accessor: 'City',
          Cell: ({ cell: { value } }) => value || '-'
        },
        {
          Header: 'State',
          accessor: 'State'
        },
        {
          Header: 'Zipcode',
          accessor: 'Zipcode',
          Cell: ({ cell: { value } }) => value || '-'
        },
        {
          Header: 'Department',
          accessor: 'Department',
          Cell: ({ cell: { value } }) => value || '-'
        }
      ]
    }
  ]);
  return (
    <div className="listContainer">
      {employeesList ? (
        <div className="listContainer-content">
          <h1>Employees</h1>
          <Table columns={columns} data={employeesList} />
        </div>
      ) : (
        <h1 className="listContainer-noEmployeesMsg">There are no employees registered</h1>
      )}

      <Link className="listContainer-link" to="/">
        Go Back
      </Link>
    </div>
  );
}
