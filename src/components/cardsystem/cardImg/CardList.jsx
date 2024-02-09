import PropTypes from "prop-types";
import Card from "./Card";

const CardList = ({ cards, addCardToDeck }) => {
  return (
    <>
      <div className="searchresult-container">
        <div className="card-container">
          {cards.map((card) => (
            <Card key={card.id} card={card} addCardToDeck={addCardToDeck} />
          ))}
        </div>
      </div>
    </>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  addCardToDeck: PropTypes.func.isRequired,
};

export default CardList;
