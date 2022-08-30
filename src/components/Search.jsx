// eslint-disable-next-line react/prop-types
function Search({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.target.elements.filter.value);
  };

  return (
    <form onSubmit={handleSubmit} className="listContainer-content-search">
      <input name="filter" />
      <button>Search</button>
    </form>
  );
}

export default Search;
