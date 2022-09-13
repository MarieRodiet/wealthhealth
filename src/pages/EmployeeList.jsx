import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Table from '../components/Table/Table';
import Search from '../components/Search';
import { SearchList } from '../components/Table/Sort';
import { employeesState } from '../features/employeesListSlice';
import { mockedList, columns } from '../data/mockedEmployeeList';
import { SortList } from './../components/Table/Sort.js';

export default function EmployeeList() {
  const { employeesList } = useSelector(employeesState);
  const [list, setList] = useState(mockedList);
  const [inputSearch, setInputSearch] = useState('');
  const [isASC, setASC] = useState(true);
  const [key, setKey] = useState('');

  function handleSearch(event) {
    event.preventDefault();
    let input = event.target.elements.filter.value;
    console.log(input);
    setInputSearch(input);
  }

  const handleSort = (key) => {
    setASC(!isASC);
    setKey(key);
  };

  useEffect(() => {
    const sortedList = SortList(mockedList, key, isASC);
    setList(sortedList);
  }, [key, isASC, inputSearch]);

  useEffect(() => {
    const searchedList = SearchList(mockedList, inputSearch);
    setList(searchedList);
  }, [inputSearch]);

  return (
    <div className="listContainer">
      {employeesList ? (
        <div className="listContainer-content">
          <h1>Employees</h1>
          <Search handleSearch={handleSearch} />
          <Table list={list} columns={columns} handleSort={handleSort} />
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
