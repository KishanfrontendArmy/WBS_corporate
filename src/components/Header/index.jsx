import React from 'react';
import './header.css';


function Header() {
    return (

        <header className="header_main">
            <div className="container">
                <div className="header_inr d-flex justify-content-between align-items-center">
                    <div className="header_left">
                        <a href="#.">
                            <img src="/images/header_logo.png" alt="" />
                        </a>
                    </div>
                    <div className="mobileIcon">
                        <a href="#."></a>
                    </div>
                    <div className="collapse navbar-collapse header_right" id="navbarNav">
                        <div className="menu">
                            <ul className="d-flex justify-content-between align-items-center">
                                <li><a href="#.">HOME</a></li>
                                <li><a href="#.">ABOUT</a></li>
                                <li><a href="#.">OUR PLATFORMS </a></li>
                                <li><a href="#.">EVENTS</a></li>
                                <li><a href="#.">FORWARD SCHEDULE </a></li>
                                <li><a href="#.">CLIENTS</a></li>
                                <li><a href="#.">CAREERS</a></li>
                                <li><a href="#.">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;