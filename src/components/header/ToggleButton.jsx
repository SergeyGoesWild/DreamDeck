import { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function ToggleButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <span
        className="material-symbols-outlined menu-icon"
        onClick={toggleDropdown}
      >
        menu
      </span>

      {isOpen && (
        <div className="overlay">
          <ul className="dropdown-list">
            <NavLink to="/about" className="toggle-link">
              <li className="toggle-text">About</li>
            </NavLink>
            <NavLink to="/contact" className="toggle-link">
              <li className="toggle-text">Contact</li>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ToggleButton;
