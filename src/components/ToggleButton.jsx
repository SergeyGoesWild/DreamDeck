import { useState } from "react";
import './Header.css'

function ToggleButton() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <span
                className="material-symbols-outlined menu-icon"
                onClick={toggleDropdown}>
                menu
            </span>

            {isOpen && (
                <div className="overlay">
                    <ul className="dropdown-list">
                        <li>About Us</li>
                        <li>Legal</li>
                        <li>Contact</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ToggleButton;