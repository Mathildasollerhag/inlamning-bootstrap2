import React from 'react';
import Topsell1 from '../../images/Topsell1.png';
import Topsell2 from '../../images/Topsell2.png';
import Topsell3 from '../../images/Topsell3.png';

export default function ProductCards2() {
    return (
        <div className="d-flex justify-content-center row mt-5 ">
            <div className="col-xl-6 col-sm-12">
                <div className="text-center position-relative">
                    <img className="img-fluid img-overlay" src={Topsell1} alt="Product" />
                    <div className="position-absolute blue-theme text-white py-2 rounded-bottom box-hover d-none d-xl-block">
                        <p className="hide-hover ml-4 text-left">Men's denim shirts full</p>
                        <div className="hover-content hover-show d-none">
                            <p>Men's denim shirts full</p>
                            <div className="info-pos">
                                <span className="border px-2">Fashion</span>
                                <p className="mt-2 mb-1 mr-3">$220.00</p>
                            </div>
                            <div className="position-absolute">
                                <h4 className="theme-color-text">$190.00</h4>
                            </div>

                            <div className="hover-show-2-lg">
                                <i className="theme-color-text fas fa-star"></i>
                                <i className="theme-color-text fas fa-star"></i>
                                <i className="theme-color-text fas fa-star"></i>
                                <i className="theme-color-text fas fa-star"></i>
                                <i className="theme-color-text far fa-star"></i>
                            </div>

                            <div className="hover-show-3-lg ml-3 py-3 bg-white">
                                <div><i className="text-danger fas fa-circle"></i></div>
                                <div><i className="text-secondary far fa-heart"></i></div>
                                <div><i className="text-secondary fas fa-random"></i></div>
                                <div><i className="text-secondary fas fa-search"></i></div>
                                <div><i className="theme-color-text fas fa-shopping-cart"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-6 d-none d-xl-block">
                <div className="position-relative mb-4">
                    <img className="img-fluid img-overlay" src={Topsell2} alt="Product" />
                    <div className="blue-theme text-white py-2 rounded-bottom position-absolute box-hover">
                        <p className="hide-hover ml-4">Women's leather bag and shoe</p>
                        <div className="hover-content hover-show d-none">
                            <p>Women's leather bag and shoe</p>
                            <span className="border px-2">Fashion</span>
                            <p className="mt-2 mb-1">$220.00</p>
                            <div className="position-absolute">
                                <h4 className="theme-color-text">$190.00</h4>
                            </div>

                            <div className="hover-show-2-md">
                                <i className="theme-color-text fas fa-star"></i>
                                <i className="theme-color-text fas fa-star"></i>
                                <i className="theme-color-text fas fa-star"></i>
                                <i className="theme-color-text fas fa-star"></i>
                                <i className="theme-color-text far fa-star"></i>
                            </div>

                            <div className="hover-show-3-sm ml-3 py-3 bg-white">
                                <div><i className="text-danger fas fa-circle"></i></div>
                                <div><i className="text-secondary far fa-heart"></i></div>
                                <div><i className="text-secondary fas fa-random"></i></div>
                                <div><i className="text-secondary fas fa-search"></i></div>
                                <div><i className="theme-color-text fas fa-shopping-cart"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="position-relative">
                    <img className="img-fluid img-overlay" src={Topsell3} alt="Product" />
                    <div className="blue-theme text-white py-2 rounded-bottom position-absolute box-hover">
                        <p className="hide-hover ml-4">New look men's sneakers</p>
                        <div className="hover-content hover-show d-none">
                            <p>New look men's sneakers</p>
                            <span className="border px-2">Fashion</span>
                            <p className="mt-2 mb-1">$220.00</p>
                            <div className="position-absolute">
                                <h4 className="theme-color-text">$190.00</h4>
                            </div>

                            <div className="hover-show-2-md">
                                <i className="theme-color-text fas fa-star"></i>
                                <i className="theme-color-text fas fa-star"></i>
                                <i className="theme-color-text fas fa-star"></i>
                                <i className="theme-color-text fas fa-star"></i>
                                <i className="theme-color-text far fa-star"></i>
                            </div>

                            <div className="hover-show-3-md ml-3 py-3 bg-white">
                                <div><i className="text-danger fas fa-circle"></i></div>
                                <div><i className="text-secondary far fa-heart"></i></div>
                                <div><i className="text-secondary fas fa-random"></i></div>
                                <div><i className="text-secondary fas fa-search"></i></div>
                                <div><i className="theme-color-text fas fa-shopping-cart"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
