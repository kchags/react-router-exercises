import React from 'react';
import { v4 as uuid } from 'uuid';
import { NavLink } from 'react-router-dom';
import "./NavBar.css";

function NavBar({ dogs }) {
    return (
        <nav className="NavBar">
            <NavLink exact to="/dogs">
                Home
            </NavLink>
            {dogs.map(dog => <NavLink exact to={"/dogs/" + dog.toLocaleLowerCase()} key={uuid()}>{dog}</NavLink>)}
        </nav>
    )
}

export default NavBar;