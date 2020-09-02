import React from 'react';
import Bars from '../../images/Hamburger menu.png';

export default function Navbar() {
    return (
        <div className="border-top border-bottom">
            <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white p-0">
                        <a className="navbar-brand" href="/#"> </a>
                        <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto topnav">
                                <li className="nav-item dropdown d-none d-lg-block">
                                    <a className="nav-link theme-color text-white pb-2" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="mt-1 mb-1">
                                            <img className="mr-2 mb-1" src={Bars} alt="Icon"/>
                                            <span className="">Browse Categories</span> 
                                            <i className="ml-5 mr-3 fas fa-angle-down text-white"></i>
                                        </div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/#">Items</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown ml-4">
                                    <a className="nav-link text-dark active" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Home
                            </a>
                                </li>
                                <li className="nav-item dropdown ml-4">
                                    <a className="nav-link text-dark" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Shop<i className="ml-1 fas fa-angle-down theme-color-text"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/#">Items</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown ml-4">
                                    <a className="nav-link text-dark" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Products<i className="ml-1 fas fa-angle-down theme-color-text"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/#">Items</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown ml-4">
                                    <a className="nav-link text-dark" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Categories<i className="ml-1 fas fa-angle-down theme-color-text"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/#">Items</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown ml-4">
                                    <a className="nav-link text-dark" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Pages<i className="ml-1 fas fa-angle-down theme-color-text"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/#">Items</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown ml-4">
                                    <a className="nav-link text-dark" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Blog
                            </a>
                                </li>
                                <div className="d-xl-none d-lg-none d-flex mt-2 mb-2">
                                    <div className="align-self-center">
                                    <a href="/#" className="text-dark ml-4"><i className="fa-lg far fa-user"></i> My account</a>
                                    </div>

                                    <div className="d-flex align-self-center">

                                        <a href="/#" className="text-dark ml-4"><i className="fa-lg fas fa-shopping-bag position-relative"><span className="badge rounded-pill theme-color position-absolute _pill text-white font-weight-light">O</span></i></a>
                                        <small className="ml-2">$0.00</small>
                                    </div>
                                </div>                         
                            </ul>
                            <button className="btn theme-color text-white _radius px-4 py-1 ml-4 d-none d-xl-block" type="submit">SPECIAL OFFER</button>
                        </div>
                    </nav>
            </div>
        </div>


    )
}
