import { PropTypes } from 'prop-types';

export default function Search({ handleSearch }) {
  return (
    <form onSubmit={handleSearch} className="listContainer-content-search">
      <label className="form-container-form-label" htmlFor="search">
        Search
      </label>
      <input name="search" id="search" />
      <button>Search</button>
    </form>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func
};
