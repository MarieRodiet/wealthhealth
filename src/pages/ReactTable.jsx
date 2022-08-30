import { PropTypes } from 'prop-types';
import { useTable } from 'react-table';

export default function ReactTable({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });
  return (
    <table {...getTableProps()} className="listContainer-content-table">
      <thead className="listContainer-content-table-header">
        {headerGroups.map((headerGroup, i) => (
          <tr key={i + '0'} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, i) => {
              if ({ ...column }['Header'] !== 'Employees') {
                return (
                  <th key={i + '1'} {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
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
  );
}

ReactTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array
};
