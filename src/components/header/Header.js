import React from 'react'
import SocialMedia from '../SocialMedia'
import Searchbar from './Searchbar'

export default function Header() {
    return (
        <div>
            <div className="theme-color d-none d-xl-block">
                <div className="container d-flex justify-content-between">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <ul className="navbar-nav ml-2 border-right mr-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    ENG<i className="ml-2 fas fa-angle-down"></i>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/#">SWE</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown mr-2">
                                <a className="nav-link text-white" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    USD<i className="ml-2 fas fa-angle-down"></i>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/#">SEK</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white border-right px-3" href="/#">Newsletter</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white border-right px-3" href="/#">Contact us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white border-right px-3" href="/#">FAQs</a>
                            </li>
                        </ul>
                        <SocialMedia />
                    </nav>
                </div>
            </div>
            <Searchbar />
        </div>
    )
}
