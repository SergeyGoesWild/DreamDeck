import PropTypes from "prop-types";

const CardBox = ({ card }) => {
  return (
    <div className="cardbox">
      <span>{card.name}</span>
    </div>
  );
};

console.log(CardBox);
CardBox.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // other card properties if necessary
  }).isRequired,
};

export default CardBox;