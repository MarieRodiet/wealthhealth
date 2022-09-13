import { PropTypes } from 'prop-types';

export default function Search({ handleSearch }) {
  return (
    <form onSubmit={handleSearch} className="listContainer-content-search">
      <input name="filter" />
      <button>Search</button>
    </form>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func
};
