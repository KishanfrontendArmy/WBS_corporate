import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


function Header() {
    return (

        <header className="header_main">
            <div className="container">
                <div className="header_inr d-flex justify-content-between align-items-center">
                    <div className="header_left">
                        <Link to="/">
                            <img src="/images/header_logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="mobileIcon">
                        <Link to="/"></Link>
                        {/* <a href=""></a> */}
                    </div>
                    <div className="collapse navbar-collapse header_right" id="navbarNav">
                        <div className="menu">
                            <ul className="d-flex justify-content-between align-items-center">
                                <li className="nav-item" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false"><a href="#Homelink">HOME</a></li>
                                <li><a href="#aboutlink">ABOUT</a></li>
                                <li><a href="#connectinglink">OUR PLATFORMS </a></li>
                                <li><a href="#joinuslink">EVENTS</a></li>
                                <li><a href="#forwardschelink">FORWARD SCHEDULE </a></li>
                                <li><a href="#clientlink">CLIENTS</a></li>
                                <li><a href="#joinuslink">CAREERS</a></li>
                                <li><a href="#contactlink">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;