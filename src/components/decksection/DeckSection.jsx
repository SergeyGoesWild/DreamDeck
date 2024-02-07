import { useState } from "react";
import './DeckSection.css'

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
        id: "ex4-1",
        localId: "1",
        name: "Team Aqua's Cacturne",
        image: "https://assets.tcgdex.net/en/ex/ex4/1",
      },
      {
        id: "ex7-1",
        localId: "1",
        name: "Azumarill",
        image: "https://assets.tcgdex.net/en/ex/ex7/1",
      },
    ],
  },
];

const DeckSection = () => {
  const [decks, setDecks] = useState(initialDecks);
  const [newDeckName, setNewDeckName] = useState("");
  const [openDeckId, setOpenDeckId] = useState(null);

  const toggleDeck = (deckId) => {
    if (openDeckId === deckId) {
      setOpenDeckId(null); // Close the currently open deck
    } else {
      setOpenDeckId(deckId); // Open the clicked deck and close any other
    }
  };


  const addDeck = () => {
    const newDeck = {
      id: Date.now(),
      name: newDeckName,
      cards: [],
    };
    setDecks([...decks, newDeck]);
    setNewDeckName("");
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

  return (
    <div className="deck-section">
      <h2>Deck List</h2>
      <input
      className='deckNameInput'
        type="text"
        value={newDeckName}
        onChange={(e) => setNewDeckName(e.target.value)}
        placeholder="New deck name"
      />
      <button className='addDeckBtn' onClick={addDeck}>Add Deck</button>
      <ul>
  {decks.map((deck) => (
    <li key={deck.id}>
      <div onClick={() => toggleDeck(deck.id)} style={{ cursor: 'pointer' }}>
        {deck.name}
      </div>
      {openDeckId === deck.id && (
                <ul>
                  {deck.cards.map((card) => (
                    <li key={card.id}>
                      {card.name}
                      <button onClick={() => removeCardFromDeck(deck.id, card.id)}>
                        Remove Card
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <button onClick={() => removeDeck(deck.id)}>Remove Deck</button>
            </li>
          ))}
        </ul>

    </div>
  );
};

export default DeckSection;
