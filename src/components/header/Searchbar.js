import React from 'react';
import Logo from '../../images/Logo1.png';
import Navbar from './Navbar';

export default function Searchbar() {
    return (
        <div>
            <div className="container mt-5 mb-5">
            <div className="row d-flex">
                <div className="col-2 mt-2 mr-5 align-sm-center">
                    <img className="ml-3" src={Logo} alt="Logo" />
                </div>
                <div className="input-group ml-3 col-6 d-none d-xl-flex">
                    <input type="text" className="form-control _radius" placeholder="Search products..." />
                    <div className="input-group-append">
                        <button className="btn border text-dark" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories<i className="ml-4 fas fa-angle-down theme-color-text"></i></button>
                        <div className="dropdown-menu p-0">
                            <a className="dropdown-item" href="/#">Products</a>
                        </div>
                    </div>
                    <div className="input-group-append">
                        <button className="btn theme-color _radius-right" type="button"><i className="fas fa-search text-white"></i></button>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div className="d-none d-lg-block">
                        <a href="/#" className="text-dark ml-3"><i className="fa-lg far fa-user mr-1"></i>My account</a>
                        <a href="/#" className="text-dark ml-5"><i className="fa-lg far fa-heart"></i></a>
                        <a href="/#" className="text-dark ml-3"><i className="fa-lg fas fa-random position-relative"><span className="badge rounded-pill theme-color position-absolute _pill text-white font-weight-light">O</span></i></a>
                        <a href="/#" className="text-dark ml-3"><i className="fa-lg fas fa-shopping-bag position-relative"><span className="badge rounded-pill theme-color position-absolute _pill text-white font-weight-light">O</span></i></a>
                        <small className="ml-2">$0.00</small>
                    </div>
                </div>
            </div>
           
        </div>
        <Navbar />
        </div>
        
    )
}
