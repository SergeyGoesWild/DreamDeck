import PropTypes from "prop-types";
import './DeckSection.css';

const DeckSection = ({ decks, toggleDeck, openDeckId, addDeck, newDeckName, setNewDeckName, removeDeck, removeCardFromDeck }) => {
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
          <li key={deck.id} onClick={() => {
            toggleDeck(deck.id)
            }}  >
            {deck.name}
            <button className='rmDeckBtn' onClick={() => removeDeck(deck.id)}>Remove Deck</button>
            <ul>
              {deck.cards.map((card) => (
                <li key={card.id}>
                  {card.name}
                  <button className='rmCardBtn'onClick={() => removeCardFromDeck(deck.id, card.id)}>
                    Remove Card
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};


DeckSection.propTypes = {
  decks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Adjusted to expect a string
      name: PropTypes.string.isRequired,
      cards: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  // other propTypes remain unchanged
};

export default DeckSection;
