import React from "react";
import { NavLink } from "react-router-dom";

function Home(){
    return (
        <div>
        <p>It's HOME page</p>
            <NavLink to="/app">
                <button>Go to App</button>
            </NavLink>
        </div>
    )
};

export default Home;