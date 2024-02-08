import "./Header.css";
import "./ToggleButton.jsx";
import ToggleButton from "./ToggleButton.jsx";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
      <NavLink to="/">
        <img className="logo-image" src="./src/assets/DreamDeckLogoTransparent.png" alt="DreamDeck logo" />
      </NavLink>
      </div>
      <ToggleButton className="toggle-button" />
    </header>
  );
}

export default Header;
