import './Header.css'
import './ToggleButton.jsx'
import ToggleButton from './ToggleButton.jsx';

function Header() {

    return (
        <div className="header">
            <p className='logo-header'>Logo-here</p>
            <ToggleButton className="toggle-button" />
        </div>
    );
};

export default Header;