import PropTypes from 'prop-types';
import SearchInput from "../searchsystem/SearchInput.jsx";
import CardList from "../cardsystem/cardImg/CardList.jsx";

function ContentSearch({ searchTerm, onSearchChange, cards, addCardToDeck }){
    return (
        <div className="content-search">
        <div>
          <SearchInput searchTerm={searchTerm} onSearchChange={onSearchChange} />
        </div>
          <CardList cards={cards} addCardToDeck={addCardToDeck}/>
        </div>
    );
}

ContentSearch.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  addCardToDeck: PropTypes.func.isRequired,
};

export default ContentSearch;