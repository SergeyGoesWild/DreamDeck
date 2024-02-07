import PropTypes from "prop-types";
import { useState } from 'react';
import Overlay from "../../overlay/Overlay"

const Card = ({ card }) => {

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
      </Overlay>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
