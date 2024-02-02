// Homepage.jsx

import React from 'react';
import './Homepage.css'
import Slideshow from './components/Slideshow';

const Homepage = () => {
  return (
    <div>
      {/* Navigation Section */}
      <nav className="navMenu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className='hero-bg'>
      <section className="hero">
        <h1>Build your dream Decks</h1>   
        <img className= "charizard" src="src/assets/charlizard 1.png"></img>
        <img className= "pokeball" src="src/assets/pokeball2 1.png"></img>
      </section>
      </div>
    <div className="btnDiv">
    <button className="deckstart"><span>Start a deck</span></button>
    </div>
      {/* Coming Soon */}
      <section className="soon">
        <h1>Coming Soon</h1>
        <Slideshow></Slideshow>
      </section>

      {/* Footer */}
      <footer>
        <p>All rights reserved DreamDeck</p>
      </footer>
    </div>
  );
};

export default Homepage;