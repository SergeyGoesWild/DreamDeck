import PropTypes from "prop-types";
import CardBox from "./CardBox";

const CardListBox = ({ cards }) => {
  return (
    <div className="cardbox-container">
      {cards.map((card) => (
        <CardBox key={card.id} card={card} />
      ))}
    </div>
  );
};

CardListBox.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CardListBox;
