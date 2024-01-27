import PropTypes from "prop-types";
import Card from "./Card";
import CardBox from "./CardBox";

const CardList = ({ cards }) => {
  return (
    <>
        <div className="searchresult-container">
            <div className="cardbox-container">
                {cards.map((card) => (
                <CardBox key={card.id} card={card} />
                ))}
            </div>
            <div className="card-container">
                {cards.map((card) => (
                <Card key={card.id} card={card} />
                ))}
            </div>
        </div>
    </>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      // other card properties if necessary
    }),
  ).isRequired,
};

export default CardList;
