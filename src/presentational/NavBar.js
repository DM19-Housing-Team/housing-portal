import React, { Component } from "react";
import { Link } from "react-router";
import '../styles/navbar.scss';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <img src={require("../styles/DevMtnLogo.png")} className="navbar-logo"/>
                <ul className="nav-links">
                   <li> <Link to="/"> Admin </Link> </li>
                   <li> <Link to="/apartments"> Apartments </Link></li>
                   <li> <Link to="/students"> Students </Link></li>
                </ul>
            </div>
        )
    }
}

export default NavBar
