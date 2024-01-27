import PropTypes from "prop-types";
import SearchInput from "../searchsystem/SearchInput";
import CardList from "../cardsystem/cardImg/CardList.jsx";
import CardListBox from "../cardsystem/cardboxName/CardListBox";
import DeckSection from "../decksection/DeckSection";
import "./MainBody.css";

const MainBody = ({ searchTerm, onSearchChange, cards }) => {
  return (
    <div>
      <div className="mainbody-container">
        <div>
          <SearchInput
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
          />
          <CardListBox cards={cards} />
        </div>
        <CardList cards={cards} />
        <DeckSection />
      </div>
    </div>
  );
};

MainBody.propTypes = {
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

export default MainBody;