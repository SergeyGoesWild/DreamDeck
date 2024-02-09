import DeckSection from "../decksection/DeckSection.jsx";
import PropTypes from 'prop-types';

const ContentDeck = ({ decks, toggleDeck, openDeckId, addDeck, newDeckName, setNewDeckName, removeDeck, removeCardFromDeck }) => {
  return (
    <div className="content-deck">
      <DeckSection decks={decks} removeDeck={removeDeck} removeCardFromDeck={removeCardFromDeck} openDeckId={openDeckId} toggleDeck={toggleDeck} addDeck={addDeck} newDeckName={newDeckName} setNewDeckName={setNewDeckName} />
    </div>
  );
};

ContentDeck.propTypes = {
  decks: PropTypes.array.isRequired,
  toggleDeck: PropTypes.func.isRequired,
  openDeckId: PropTypes.string,
};

export default ContentDeck;
