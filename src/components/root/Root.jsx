import { Outlet, NavLink } from "react-router-dom";
import "../../Homepage.css";

function Root(){
    return (
        <>
        <header>
            <nav className="navMenu">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
        </>
    );
}

export default Root;