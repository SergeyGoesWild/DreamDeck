import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DeckTab from '../tabs/DeckTab.jsx';
import SearchTab from '../tabs/SearchTab.jsx';
import ContentSearch from '../tabs/ContentSearch.jsx';
import ContentDeck from "../tabs/ContentDeck.jsx";
import "./MainBody.css";
import "../tabs/Tabs.css";

const initialDecks = [
  {
    id: 1,
    name: "Deck 1",
    cards: [
      {
        id: "ex16-1",
        localId: "1",
        name: "Aggron",
        image: "https://assets.tcgdex.net/en/ex/ex16/1",
      },
      {
        id: "ex1-1",
        localId: "1",
        name: "Aggron",
        image: "https://assets.tcgdex.net/en/ex/ex1/1",
      },
      {
        id: "ex2-1",
        localId: "1",
        name: "Armaldo",
        image: "https://assets.tcgdex.net/en/ex/ex2/1",
      },
      {
        id: "sv04-001",
        localId: "001",
        name: "Surskit",
        image: "https://assets.tcgdex.net/en/sv/sv04/001",
      },
      {
        id: "sv01-001",
        localId: "001",
        name: "Pineco",
        image: "https://assets.tcgdex.net/en/sv/sv01/001",
      } /* ... other cards */,
    ],
  },
];



const MainBody = ({ searchTerm, onSearchChange, cards }) => {
  const [decks, setDecks] = useState(initialDecks);
  const [openDeckId, setOpenDeckId] = useState("");
  const [newDeckName, setNewDeckName] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const addDeck = () => {
    const newDeck = {
      id: Date.now().toString(), // Convert to string
      name: newDeckName,
      cards: [],
    };
    setDecks(prevDecks => [...prevDecks, newDeck]);
    setNewDeckName(''); // Reset new deck name input field
  };

  const removeDeck = (deckId) => {
    setDecks(decks.filter((deck) => deck.id !== deckId));
  };

  const removeCardFromDeck = (deckId, cardId) => {
    const updatedDecks = decks.map((deck) => {
      if (deck.id === deckId) {
        return {
          ...deck,
          cards: deck.cards.filter((card) => card.id !== cardId),
        };
      }
      return deck;
    });
    setDecks(updatedDecks);
  };

  const addCardToOpenDeck = (cardToAdd) => {
    setDecks((currentDecks) =>
      currentDecks.map((deck) => {
        if (deck.id === openDeckId) {
          

          const isCardAlreadyInDeck = deck.cards.some((card) => card.id === cardToAdd.id);
          if (!isCardAlreadyInDeck) {
            return { ...deck, cards: [...deck.cards, cardToAdd] };
          }
        }
        return deck;
      })
    );
  };

  const toggleDeck = (deckId) => {
    setOpenDeckId(deckId === openDeckId ? "" : deckId);
  };



  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="mainbody-container">
      {isSmallScreen ? (
        <>
          <div className="search-and-deck-tabs">
            <div onClick={() => setActiveTab(1)} className={activeTab === 1 ? 'tab-active' : ''}>
              <SearchTab/>
            </div>
            <div onClick={() => setActiveTab(2)} className={activeTab === 2 ? 'tab-active' : ''}>
              <DeckTab/>
            </div>
          </div>
          <div className="content-of-tab">
            {activeTab === 1 && (
              <ContentSearch searchTerm={searchTerm} onSearchChange={onSearchChange} cards={cards} addCardToDeck={addCardToOpenDeck} />
            )}
            {activeTab === 2 && (
              <ContentDeck decks={decks} removeDeck={removeDeck} removeCardFromDeck={removeCardFromDeck} openDeckId={openDeckId} toggleDeck={toggleDeck} addDeck={addDeck} newDeckName={newDeckName} setNewDeckName={setNewDeckName} />
            )}
          </div>
        </>
      ) : (
        <>
          <ContentSearch searchTerm={searchTerm} onSearchChange={onSearchChange} cards={cards} addCardToDeck={addCardToOpenDeck} />
          <ContentDeck decks={decks} removeDeck={removeDeck} removeCardFromDeck={removeCardFromDeck} openDeckId={openDeckId} toggleDeck={toggleDeck} addDeck={addDeck} newDeckName={newDeckName} setNewDeckName={setNewDeckName} />
        </>
      )}
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