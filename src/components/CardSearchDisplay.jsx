import PropTypes from "prop-types";
import SearchInput from "./SearchInput";
import CardList from './Cardlist';

const CardSearchDisplay = ({ searchTerm, onSearchChange, cards }) => {
  return (
    <div>
      <SearchInput searchTerm={searchTerm} onSearchChange={onSearchChange} />
      <CardList cards={cards} />
    </div>
  );
};

CardSearchDisplay.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      // other card properties if necessary
    }),
  ).isRequired,
};

export default CardSearchDisplay;
