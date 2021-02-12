import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavbarScreen = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/" >Navbar</NavLink>

            <div class="navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <NavLink activeClassName="active"
                        className="nav-item nav-link" to="/classes">
                        classes
                    </NavLink>
                    {/* <NavLink activeClassName="active"
                        className="nav-item nav-link" to="/equipment">
                        Equipment
                    </NavLink>
                    <NavLink activeClassName="active"
                        className="nav-item nav-link" to="/mechanics">
                        Mechanics
                    </NavLink>
                    <NavLink activeClassName="active"
                        className="nav-item nav-link" to="/races">
                        Races
                    </NavLink>
                    <NavLink activeClassName="active"
                        className="nav-item nav-link" to="/rules">
                        Rules
                    </NavLink>
                    <NavLink activeClassName="active"
                        className="nav-item nav-link" to="/spells">
                        Spells
                    </NavLink> */}
                </ul>
            </div>
        </nav>
    )
}
