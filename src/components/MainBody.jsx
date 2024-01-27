import PropTypes from "prop-types";
import SearchInput from "./SearchInput";
import CardList from './Cardlist';
import DeckSection from './DeckSection';


const CardSearchDisplay = ({ searchTerm, onSearchChange, cards }) => {
  return (

  <div>
    <div className="mainbody-container">
      <div>
        <SearchInput searchTerm={searchTerm} onSearchChange={onSearchChange} />          
          <div>
            <CardList cards={cards} />
          </div>
      </div>
      <div>
        <DeckSection />
      </div>
    </div>
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
