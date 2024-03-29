import React from 'react';
import './Homepage.css'
import Slideshow from './components/Slideshow';
import { NavLink } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>

      {/* Hero Section */}
      <div className='hero-bg'>
      <section className="hero">
        <h1>Build your dream Decks</h1>   
        <img className= "charizard" src="src/assets/charlizard.png"/>
        <img className= "pokeball" src="src/assets/pokeball.png"/>
      </section>
      </div>
    <div className="btnDiv">
    <NavLink to="/pokemondeck" className="deckstart">
        <button className="deckstart"><span>Start a deck</span></button>
    </NavLink>
    </div>
      {/* Coming Soon */}
      <section className="soon">
        <h1>Coming Soon</h1>
        <Slideshow />
      </section>
    </div>
  );
};

export default Homepage;