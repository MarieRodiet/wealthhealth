import { PropTypes } from 'prop-types';
import { ReactComponent as ArrowSvg } from '../../assets/up-down-solid.svg';

export default function TableComponent({ data, columns, handleSort }) {
  return (
    <div>
      <table className="table">
        <thead className="table-header">
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
          {data.map((el) => {
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
  columns: PropTypes.array,
  handleSort: PropTypes.func
};
