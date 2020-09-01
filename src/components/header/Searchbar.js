import React from 'react';
import Logo from '../../images/Logo.png';
import Bag from '../../images/Bag icon.png';

export default function Navbar() {
    return (
        <div className="row mt-5">
            <div className="container d-flex">
                <div className="col-2 mt-2 mr-5">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="input-group ml-3 col-6">
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

                <div className="align-self-center">
                    <i className="far fa-user fa-lg ml-4"></i>
                    <small className="ml-3">My account</small>
                </div>
                <div className="ml-5 align-self-center">
                    <i className="far fa-heart fa-lg"></i>

                </div>
                <div className="d-flex align-self-center">

                    <div className="">
                        <span className="badge badge-pill theme-color position-absolute"><small>0</small></span>
                        <i className="fas fa-random fa-lg ml-3"></i>
                    </div>

                    <div className="">
                        <span className="badge badge-pill theme-color position-absolute"><small>0</small></span>
                        <img className="mb-1 ml-3" src={Bag} alt="Icon" />
                    </div>



                    <small className="ml-2">$0.00</small>
                </div>
            </div>
            <Navbar />
        </div>
    )
}
