import PropTypes from "prop-types";
import SearchInput from "../searchsystem/SearchInput";
import CardList from "../cardsystem/cardImg/CardList.jsx";
import CardListBox from "../cardsystem/cardboxName/CardListBox";
import DeckSection from "../decksection/DeckSection";
import "./MainBody.css";

const MainBody = ({ searchTerm, onSearchChange, cards }) => {
  return (
    <>
    <div className="searchbar">
      <SearchInput searchTerm={searchTerm} onSearchChange={onSearchChange} />
    </div><div className="mainbody-container">
        <div>
          <CardList cards={cards} />
        </div>
        <DeckSection />
      </div></>
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
    }),
  ).isRequired,
};

export default MainBody;
