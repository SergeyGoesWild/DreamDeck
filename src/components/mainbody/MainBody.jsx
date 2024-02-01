import { useState } from "react";
import PropTypes from "prop-types";
import DeckTab from '../tabs/DeckTab.jsx';
import SearchTab from '../tabs/SearchTab.jsx';
import ContentSearch from '../tabs/ContentSearch.jsx';
import ContentDeck from "../tabs/ContentDeck.jsx";
import "./MainBody.css";
import "../tabs/Tabs.css";

const MainBody = ( {searchTerm, onSearchChange, cards} ) => {
  
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (arg) => {
    setActiveTab(arg);
  };

  return (
    <div className="mainbody-container">

      <div className="search-and-deck-tabs">
        <div onClick={() => handleTabClick(1)}>
        <SearchTab/>
        </div>
        <div onClick={() => handleTabClick(2)}>
        <DeckTab/>
        </div>
      </div>
      <div className="content-of-tab">
      {activeTab === 1 && <ContentSearch searchTerm={searchTerm} onSearchChange={onSearchChange} cards={cards}/>}
      {activeTab === 2 && <ContentDeck/>}
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
    }),
  ).isRequired,
};

export default MainBody;
