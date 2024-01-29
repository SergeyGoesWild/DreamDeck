import PropTypes from "prop-types";

const CardBox = ({ card }) => {
  return (
    <div className="card-box">
      <span>{card.name}</span>
    </div>
  );
};

CardBox.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardBox;
