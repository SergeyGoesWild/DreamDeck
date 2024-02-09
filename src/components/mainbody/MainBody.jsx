import PropTypes from "prop-types";
import SearchInput from "../searchsystem/SearchInput";
import CardList from "../cardsystem/cardImg/CardList.jsx";
import CardListBox from "../cardsystem/cardboxName/CardListBox";
import DeckSection from "../decksection/DeckSection";
import SearchTab from "../tabs/SearchTab.jsx";
import DeckTab from "../tabs/DeckTab.jsx";
import "./MainBody.css";
import { useState, useEffect } from "react";

const MainBody = ({ searchTerm, onSearchChange, cards, decks }) => {
    const [smallScreen, setSmallScreen] = useState(window.innerWidth < 768);
    const [activeTab, setActiveTab] = useState("search");
    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    const handleResize = () => {
        setSmallScreen(window.innerWidth < 768);
    };
    
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <>
        <div className="tabs-container">
            <div
                className={activeTab === "search" ? "tab-clicked" : "search-tab-container"}
                onClick={() => handleClick("search")}
            >
                <SearchTab/>
            </div>
            <div
                className={activeTab === "deck" ? "tab-clicked" : "deck-tab-container"}
                onClick={() => handleClick("deck")}
            >
                <DeckTab/>
            </div>
        </div>
        {((activeTab === "search" && smallScreen) || (!smallScreen)) && 
        <div className="searchbar">
            <SearchInput searchTerm={searchTerm} onSearchChange={onSearchChange} />
        </div>
        }
        <div className="mainbody-container">
            { smallScreen ? (
                <>
                    {activeTab === "search" && <CardList cards={cards} decks={decks} />} 
                    {activeTab === "deck" && <DeckSection />}   
                </>
            ) : (
                <>
                    <CardList cards={cards} decks={decks} />
                    <DeckSection />
                </>
            ) }
        </div>
    </>
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
  decks: PropTypes.array.isRequired,
};


export default MainBody;