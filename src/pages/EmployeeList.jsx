import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Table from './Table';
import { useState, useEffect, useMemo } from 'react';
import { employeesState } from '../features/employeesListSlice';

export default function EmployeeList() {
  const { employeesList } = useSelector(employeesState);
  const [data, setData] = useState([]);

  useEffect(() => {
    const list = [
      {
        FirstName: 'Marie',
        LastName: 'Moore',
        BirthDate: '07/08/1989',
        StartDate: '01/09/2022',
        Street: '7 Route de Dammartin',
        City: 'Mortcerf',
        State: 'FL',
        Zipcode: '0123',
        Department: 'Marketing'
      },
      {
        FirstName: 'Dominique',
        LastName: 'Rodiet',
        BirthDate: '07/08/1959',
        StartDate: '01/09/2023',
        Street: 'Hello',
        City: 'Saint',
        State: 'WN',
        Zipcode: '9876',
        Department: 'Sales'
      },
      {
        FirstName: 'Louis',
        LastName: 'Someone',
        BirthDate: '07/08/1909',
        StartDate: '02/09/2023',
        Street: 'Street',
        City: 'Paris',
        State: 'AZ',
        Zipcode: '0000',
        Department: 'Consulting'
      }
    ];
    console.log(employeesList);
    setData(list);
  }, []);

  const columns = useMemo(() => [
    {
      Header: 'Employees',
      columns: [
        {
          Header: 'FirstName',
          accessor: 'FirstName',
          Cell: ({ cell: { value } }) => value || '-'
        },
        {
          Header: 'LastName',
          accessor: 'LastName',
          Cell: ({ cell: { value } }) => value || '-'
        },
        {
          Header: 'BirthDate',
          accessor: 'BirthDate',
          Cell: ({ cell: { value } }) => value || '-'
        },
        {
          Header: 'StartDate',
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
      {data.length > 0 ? (
        <div className="listContainer-content">
          <h1>Employees</h1>
          <Table columns={columns} data={data} />
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
