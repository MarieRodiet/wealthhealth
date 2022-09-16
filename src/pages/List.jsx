import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Table from '../components/Table/Table';
import Search from '../components/Search';
import { SearchList, SortList } from '../components/Table/Sort';
import { mockedList, columns } from '../data/mockedEmployeeList';
import Pagination from '../components/Pagination';
// import { useSelector } from 'react-redux';
// import { employeesState } from '../features/employeesListSlice';

export default function List() {
  //   const { employeesList } = useSelector(employeesState);
  //   console.log(employeesList);
  const [list, setList] = useState(mockedList);
  const [inputSearch, setInputSearch] = useState('');
  const [isASC, setASC] = useState(true);
  const [key, setKey] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const numberPerPage = 5;
  const maxNbOfPages = Math.round(mockedList.length / numberPerPage);

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

  const handleCurrentPage = (order) => {
    if (order === 'previous') {
      if (currentPage === 1) {
        setCurrentPage(maxNbOfPages);
      } else setCurrentPage(currentPage - 1);
    } else {
      if (currentPage === maxNbOfPages) {
        setCurrentPage(1);
      } else setCurrentPage(currentPage + 1);
    }
  };

  const handleShowList = () => {
    const trimStart = (currentPage - 1) * numberPerPage;
    const trimEnd = trimStart + numberPerPage;
    return mockedList.slice(trimStart, trimEnd);
  };

  useEffect(() => {
    const trimedList = handleShowList();
    setList(trimedList);
  }, [currentPage]);

  return (
    <div className="listContainer">
      <div className="listContainer-content">
        <h1>Employees</h1>
        <Search handleSearch={handleSearch} />
        {list.length === 0 ? (
          <div className="noData">
            <span className="noData-content">No result!</span>
          </div>
        ) : (
          <div>
            <Table
              data={list}
              columns={columns}
              handleSort={handleSort}
              numberPerPage={numberPerPage}
            />
            <Pagination handleCurrentPage={handleCurrentPage} currentPage={currentPage} />
          </div>
        )}
      </div>
      <Link className="listContainer-link" to="/">
        Go Back
      </Link>
    </div>
  );
}
