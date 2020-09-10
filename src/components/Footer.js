import React from 'react';
import Logo2 from '../images/Logo2.png';
import Mastercard from '../images/Mastercard.png';
import Paypal from '../images/Paypal.png';
import Visa from '../images/Visa.png';
import Payoneer from '../images/Payoneer.png';
import Discover from '../images/Discover.png';

export default function Footer() {
    return (
        <div className="blue-theme text-white border-top-theme">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 mt-3 mb-3">
                        <img className="mt-5" src={Logo2} alt="Logo" />
                        <div className="mt-4">
                            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim quam, ullamcorper vel tellus vitae, tempus fringilla lectus. Donec maximus justo eu nisl convallis iaculis. Aenean laoreet.</small>
                            <p className="mt-4"> Follow us</p>
                        </div>
                        <div className="">
                            <a className="mr-2" href="/#"> <i className="theme-color-text fab fa-facebook-f"></i></a>
                            <a className="mr-2" href="/#"> <i className="theme-color-text fab fa-twitter"></i></a>
                            <a className="mr-2" href="/#"> <i className="theme-color-text fab fa-instagram"></i></a>
                            <a className="mr-2" href="/#"> <i className="theme-color-text fab fa-pinterest-p"></i></a>
                            <a className="mr-2" href="/#"> <i className="theme-color-text fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className=" col-md-6 col-lg-3" id="footerKenta">
                        <h5 className="theme-color-text text-uppercase mt-5">Contact info</h5>
                        <div className="">
                            <p className="theme-color-text mb-0 mt-4">Address:</p>
                            <span className="mt-1">Solna Business Park Feni-2500, Stockholm</span>
                        </div>
                        <div className="mt-3">
                            <p className="theme-color-text mb-0">Phone:</p>
                            <p className="mt-1 m-0">+08-123456789</p>
                            <p className="">+08-123456789</p>
                        </div>
                        <div className="mt-3">
                            <p className="theme-color-text mb-0">Email:</p>
                            <span className="mt-1">support@website.com</span>
                            <span className="mt-1"> info@website.com</span>
                        </div>
                    </div>
                    <div className=" col-md-6 col-lg-3" id="linksfooter">
                        <h5 className="theme-color-text text-uppercase pt-5">Useful links</h5>
                        <div className="mt-4">
                            <span className="footer__hover">Privacy Policy</span>
                        </div>
                        <div className="mt-2">
                            <span className="footer__hover">Terms & Conditions</span>
                        </div>
                        <div className="mt-2">
                            <span className="footer__hover">Contact Us</span>
                        </div>
                        <div className="mt-2">
                            <span className="footer__hover">Our Sitemap</span>
                        </div>
                        <div className="mt-2">
                            <span className="footer__hover">Latest News</span>
                        </div>
                        <div className="mt-2">
                            <span className="footer__hover">Returns</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h5 className="theme-color-text text-uppercase pt-5">Recent instagram</h5>
                        <div className="grid-layout-2">
                            <div className="grid-item-footer"></div>
                            <div className="grid-item-footer"></div>
                            <div className="grid-item-footer"></div>
                        </div>
                        <div className="grid-layout-2">
                            <div className="grid-item-footer"></div>
                            <div className="grid-item-footer theme-color text-center"><i className="mt-1 fa-2x fab fa-instagram text-white"></i></div>
                            <div className="grid-item-footer"></div>
                        </div>
                        <div className="grid-layout-2">
                            <div className="grid-item-footer"></div>
                            <div className="grid-item-footer"></div>
                            <div className="grid-item-footer"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 blue-theme-dark border-top">
                <div className="container d-flex justify-content-between ">
                    <div className="pt-4 pb-3">
                        <small className="">&copy; Copyright 2020 KenKata</small>
                    </div>
                    <div className="pt-3 pb-3 d-none d-md-block">
                        <img className="mr-2 img-fluid" src={Mastercard} alt="Logo" />
                        <img className="mr-2 img-fluid" src={Paypal} alt="Logo" />
                        <img className="mr-2 img-fluid" src={Visa} alt="Logo" />
                        <img className="mr-2 img-fluid" src={Payoneer} alt="Logo" />
                        <img src={Discover} alt="Logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}
