import { PropTypes } from 'prop-types';
import { useState, useEffect } from 'react';
import { ReactComponent as ArrowSvg } from '../../assets/up-down-solid.svg';
import { SortList } from './Sort.js';

export default function TableComponent({ data, columns }) {
  const [list, setList] = useState(data);
  const [isASC, setASC] = useState(true);
  const [key, setKey] = useState('');

  const handleSort = (key) => {
    setASC(!isASC);
    setKey(key);
  };

  useEffect(() => {
    const sortedList = SortList(list, key, isASC);
    setList(sortedList);
  }, [key, isASC, list, data]);

  return (
    <div>
      <table className="listContainer-content-table">
        <thead className="listContainer-content-table-header">
          <tr>
            {columns.map((el) => (
              <th key={el}>
                {el}
                <ArrowSvg onClick={() => handleSort(el)} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {list.map((el) => {
            return (
              <tr key={el.FirstName}>
                {Object.keys(el).map((key) => {
                  return <td key={el[key]}>{el[key]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

TableComponent.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array
};
