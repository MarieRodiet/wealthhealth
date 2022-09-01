import { PropTypes } from 'prop-types';
import { useGlobalFilter, useSortBy, useTable } from 'react-table';
import Search from '../components/Search';
import { ReactComponent as ArrowSvg } from '../assets/up-down-solid.svg';

export default function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setGlobalFilter } =
    useTable(
      {
        columns,
        data
      },
      useGlobalFilter,
      useSortBy
    );
  return (
    <>
      <Search onSubmit={setGlobalFilter} />
      <table {...getTableProps()} className="listContainer-content-table">
        <thead className="listContainer-content-table-header">
          {headerGroups.map((headerGroup, i) => (
            <tr key={i + '0'} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => {
                if ({ ...column }['Header'] !== 'Employees') {
                  return (
                    <>
                      <th key={i + '1'} {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render('Header')}
                        <ArrowSvg />
                      </th>
                    </>
                  );
                }
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr key={i++} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  const value = { ...cell }['value'];
                  return <td key={value}>{value}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array
};
