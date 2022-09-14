import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Table from '../components/Table/Table';
import Search from '../components/Search';
import { SearchList, SortList } from '../components/Table/Sort';
import { employeesState } from '../features/employeesListSlice';
import { mockedList, columns } from '../data/mockedEmployeeList';

export default function EmployeeList() {
  const { employeesList } = useSelector(employeesState);
  const [list, setList] = useState(mockedList);
  const [inputSearch, setInputSearch] = useState('');
  const [isASC, setASC] = useState(true);
  const [key, setKey] = useState('');

  function handleSearch(event) {
    event.preventDefault();
    let input = event.target.elements.search.value;
    setInputSearch(input.toLowerCase());
  }

  useEffect(() => {
    const searchedList = SearchList(mockedList, inputSearch);
    setList(searchedList);
  }, [inputSearch]);

  const handleSort = (header) => {
    setASC(!isASC);
    setKey(header);
  };

  useEffect(() => {
    const sortedList = SortList(mockedList, key, isASC);
    setList(sortedList);
    setKey('');
  }, [key, isASC]);

  return (
    <div className="listContainer">
      {employeesList ? (
        <div className="listContainer-content">
          <h1>Employees</h1>
          <Search handleSearch={handleSearch} />
          <Table data={list} columns={columns} handleSort={handleSort} />
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
