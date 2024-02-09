import PropTypes from "prop-types";
import { useState } from 'react';
import Overlay from "../../overlay/Overlay"

const Card = ({ card, addCardToDeck }) => {

  // Overlay
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card">
      <img onClick={toggleOverlay} src={card.image} alt={card.name} />
      <Overlay isOpen={isOpen} onClose={toggleOverlay}>
      <img src={card.image} alt={card.name} />
      <button onClick={() => addCardToDeck(card)}>+</button>
      </Overlay>
      <button onClick={() => addCardToDeck(card)}>+</button>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  addCardToDeck: PropTypes.func.isRequired,
};

export default Card;
