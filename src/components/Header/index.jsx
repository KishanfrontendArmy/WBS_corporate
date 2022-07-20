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
                                <li className="nav-item" data-bs-toggle="collapse" data-bs-target="#navbarNav"><a href="#Homelink">HOME</a></li>
                                <li><a href="#aboutlink">ABOUT</a></li>
                                {/* <li><a href="#connectinglink">OUR PLATFORMS </a></li> */}
                                <li className="nav-item dropdown" id="navbarNavDarkDropdown">
                                    <a className="nav-link p-0 dropdown-toggle" href="#" id="navbarDarkDropdownMenuLinkPlatforms" role="button" data-bs-toggle="dropdown" >
                                        OUR PLATFORMS
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLinkPlatforms">
                                        <li>
                                            <a className="dropdown-item" href="https://www.tresconglobal.com/conferences/" rel="noreferrer"
                                                target="_blank">
                                                CONFERENCES
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://www.tresconglobal.com/bespoke-events/" rel="noreferrer"
                                                target="_blank">
                                                BESPOKE EVENTS
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://www.tresconglobal.com/expos.php" rel="noreferrer"
                                            target="_blank">
                                                EXPOS
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown" id="navbarNavDarkDropdown">
                                    <a className="nav-link p-0 dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" >
                                        Events
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li>
                                            <a className="dropdown-item" href="https://worldblockchainsummit.com" rel="noreferrer"
                                                target="_blank">
                                                World Blockchain Summit
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://tresconglobal.com/conferences/ai/" rel="noreferrer"
                                                target="_blank">
                                                World AI Show
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://tresconglobal.com/conferences/cyber-sec" rel="noreferrer"
                                            target="_blank">
                                                World Cyber Security Summit
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://tresconglobal.com/conferences/cloud" rel="noreferrer"
                                            target="_blank">
                                                World Cloud Show
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://tresconglobal.com/conferences/fintech/ksa/" rel="noreferrer"
                                            target="_blank">
                                                World Fintech Summit
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://worldmetaverseshow.com/" rel="noreferrer"
                                            target="_blank">
                                                World Metaverse Show
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://tresconglobal.com/conferences/cio/india/" rel="noreferrer"
                                            target="_blank">
                                                Big CIO Show
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://tresconglobal.com/conferences/bfsi/india/" rel="noreferrer"
                                            target="_blank">
                                                Big BFSI Future Tech Show
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href=" https://iiffglobal.com/delhi/" rel="noreferrer"
                                            target="_blank">
                                                India International Furniture Fair
                                            </a>
                                        </li>
                                        {/* <li>
                                            <a className="dropdown-item" href="https://world5gshow.com/" rel="noreferrer"
                                            target="_blank">
                                                World 5G Show
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://worldevshow.com/" rel="noreferrer"
                                            target="_blank">
                                                World EV Show
                                            </a>
                                        </li> */}
                                    </ul>
                                </li>
                                <li className="nav-item dropdown" id="navbarNavDarkDropdown">
                                    <a className="nav-link p-0 dropdown-toggle" href="#" id="navbarDarkDropdownMenuLinkSchedule" role="button" data-bs-toggle="dropdown" >
                                        FORWARD SCHEDULE
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLinkSchedule">
                                        <li>
                                            <a className="dropdown-item" href="https://trescon.s3.us-east-2.amazonaws.com/corp/event-calendar/2022/mena-event-calendar-virtual.pdf" rel="noreferrer"
                                                target="_blank">
                                                MENA
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://trescon.s3.us-east-2.amazonaws.com/corp/event-calendar/2022/asia-event-calendar-virtual.pdf" rel="noreferrer"
                                                target="_blank">
                                                APAC
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://trescon.s3.us-east-2.amazonaws.com/corp/event-calendar/2022/india-event-calendar-virtual.pdf" rel="noreferrer"
                                            target="_blank">
                                                India
                                            </a>
                                        </li>
                                    </ul>
                                </li>
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