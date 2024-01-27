import PropTypes from "prop-types";

const SearchInput = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search cards..."
        value={searchTerm}
        onChange={onSearchChange}
        className="search-input"
      />
    </div>
  );
};

SearchInput.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchInput;
