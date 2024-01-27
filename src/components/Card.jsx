import PropTypes from "prop-types";

const Card = ({ card }) => {
  return (
    <div className="card">
      <img src={card.image} alt={card.name} />
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // other card properties if necessary
  }).isRequired,
};

export default Card;
