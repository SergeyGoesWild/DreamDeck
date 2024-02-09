import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import Overlay from "../../overlay/Overlay"
import Colorless from '../../../assets/colorless.png'
import Psychic from '../../../assets/psychic.png'
import Fire from '../../../assets/fire.png'
import Grass from '../../../assets/grass.png'
import Fairy from '../../../assets/fairy.png'
import Fighting from '../../../assets/fighting.png'
import Metal from '../../../assets/metal.png'
import Dragon from '../../../assets/dragon.png'
import Water from '../../../assets/water.png'
import Dark from '../../../assets/dark.png'
import './Card.css'

const Card = ({ card }) => {
  const [cardDetails, setCardDetails] = useState(null);

  const costTypeImages = {
    Colorless: Colorless,
    Psychic: Psychic,
    Fire: Fire,
    Grass: Grass,
    Fairy: Fairy,
    Fighting: Fighting,
    Metal: Metal,
    Dragon: Dragon,
    Water: Water,
    Dark: Dark,
  };

  const renderCostImage = (costType) => {
    const imageUrl = costTypeImages[costType];
    if (imageUrl) {
      return <img height='16px' src={imageUrl} alt={costType} />;
    }

    return null;
  };

  // Overlay
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    const cardDetailsUrl = `https://api.tcgdex.net/v2/en/cards/${card.id}`;
    fetch(cardDetailsUrl)
      .then((response) => response.json())
      .then((result) => {
        setCardDetails(result);
      })
      .catch((error) => console.error('Error fetching card details:', error));
  }, [card.id]);


  return (
    <div>
      <p>{card.name}</p>
      <img onClick={toggleOverlay}
      className='card-container-img'
      src={card.lowResolutionImage} 
      alt={card.name} />
      <Overlay isOpen={isOpen} onClose={toggleOverlay}>
  <div className="overlay-container">
    <div className="overlay-content">
      <img 
      className='overlay-card-img'
      src= {isOpen ? `${card.image}/high.webp` : card.lowResolutionImage} 
      alt={card.name} />
      </div>
     <div
      className='overlay-infos'
      >
  {cardDetails && (
    <>
      <div className="info-section">
        <p className="info-title">Types:</p>
        <p className="info-content">{cardDetails.types}</p>
      </div>
      <div className="info-section">
      </div>
      <div className="info-section">
        <p className="info-title">Set:</p>
        <p className="info-content">{cardDetails.set.name}</p>
      </div>
      <div className="info-section">
        <p className="info-title">Attacks:</p>
        {cardDetails.attacks &&
        cardDetails.attacks.map((attack, index) => (
            <div className="attack" key={index}>
              <p className="attack-name">{attack.name}</p>
              {attack.cost && (
                <p className="attack-cost">Cost: {Array.isArray(attack.cost) ? attack.cost.map(renderCostImage) : renderCostImage(attack.cost)}</p>
              )}
              <p className="attack-effect">Effect: {attack.effect}</p>
              {attack.damage && <p className="attack-damage">Damage: {attack.damage}</p>}
            </div>
          ))}
      </div>
    </>
  )}
</div>
  </div>
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

