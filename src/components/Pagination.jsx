import { PropTypes } from 'prop-types';

export default function Pagination({ handleCurrentPage, currentPage }) {
  return (
    <div className="table-container-pagination">
      <button
        className="table-container-pagination-btn"
        onClick={() => handleCurrentPage('previous')}>
        Previous
      </button>
      <div className="table-container-pagination-currentPage">{currentPage}</div>
      <button className="table-container-pagination-btn" onClick={() => handleCurrentPage('next')}>
        Next
      </button>
    </div>
  );
}

Pagination.propTypes = {
  handleCurrentPage: PropTypes.func,
  currentPage: PropTypes.number
};
