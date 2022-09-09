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
            <tr key={i + 'tr'} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => {
                if ({ ...column }['Header'] !== 'Employees') {
                  return (
                    <>
                      <th key={i + 'th'} {...column.getHeaderProps(column.getSortByToggleProps())}>
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
              <tr key={i + 'tbtr'} {...row.getRowProps()}>
                {row.cells.map((cell, i) => {
                  const value = { ...cell }['value'];
                  return <td key={i + 'td'}>{value}</td>;
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
