import "./Header.css";
import "./ToggleButton.jsx";
import ToggleButton from "./ToggleButton.jsx";

function Header() {
  return (
    <header className="header">
      <p className="logo-header">Logo-here</p>
      <div className="language-container">
        <p>🇬🇧</p>
        <p>🇫🇷</p>
        <p>🇩🇪</p>
      </div>
      <ToggleButton className="toggle-button" />
    </header>
  );
}

export default Header;
