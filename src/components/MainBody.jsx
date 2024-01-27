import PropTypes from "prop-types";
import SearchInput from "./SearchInput";
import CardList from './Cardlist';
import CardListBox from './CardListBox';
import DeckSection from './DeckSection';


const mainbody = ({ searchTerm, onSearchChange, cards }) => {
  return (

  <div>
    <div className="mainbody-container">
      <div>
        <SearchInput searchTerm={searchTerm} onSearchChange={onSearchChange} />
        <CardListBox cards={cards} />
      </div>
      <CardList cards={cards} />
      <DeckSection />
    </div>
  </div>

  );
};

mainbody.propTypes = {
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

export default mainbody;
