import React from 'react';
import Card1 from '../../images/Product1.png';
import Card2 from '../../images/Product2.png';
import Card3 from '../../images/Product3.png';

export default function ProductCards() {
    return (
        <div className="mt-5 d-flex align-items-center">
            <div className="container p-0">
                <div className="card-deck">
                    <div className="card border-0 container-hover d-none d-lg-block d-none-media">
                        <img className="position-relative img-overlay" src={Card1} alt="Card cap" />
                        <div className="circle-new1">HOT</div>
                        <div className="blue-theme text-white py-2 rounded-bottom position-absolute box-hover">
                            <p className="hide-hover ml-4">Winter collection for women's</p>
                            <div className="hover-content hover-show d-none">
                                <p>Winter collection for women's</p>
                                <span className="border px-2">Fashion</span>
                                <p className="mt-2 mb-1">$220.00</p>
                                <div className="position-absolute">
                                    <h4 className="theme-color-text">$190.00</h4>
                                </div>

                                <div className="hover-show-2">
                                    <i className="theme-color-text fas fa-star"></i>
                                    <i className="theme-color-text fas fa-star"></i>
                                    <i className="theme-color-text fas fa-star"></i>
                                    <i className="theme-color-text fas fa-star"></i>
                                    <i className="theme-color-text far fa-star"></i>
                                </div>

                                <div className="hover-show-3 ml-3 py-3 bg-white">
                                    <div><i className="text-danger fas fa-circle"></i></div>
                                    <div><i className="text-secondary far fa-heart"></i></div>
                                    <div><i className="text-secondary fas fa-random"></i></div>
                                    <div><i className="text-secondary fas fa-search"></i></div>
                                    <div><i className="theme-color-text fas fa-shopping-cart"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card border-0 container-hover">
                        <img className="position-relative img-overlay" src={Card2} alt="Card cap" />
                        <div className="circle-new">NEW</div>
                        <div className="blue-theme text-white py-2 rounded-bottom position-absolute box-hover">
                            <p className="hide-hover ml-4">New look men's coat</p>
                            <div className="hover-content hover-show d-none">
                                <p>New look men's coat</p>
                                <span className="border px-2">Fashion</span>
                                <p className="mt-2 mb-1">$220.00</p>
                                <div className="position-absolute">
                                    <h4 className="theme-color-text">$190.00</h4>
                                </div>

                                <div className="hover-show-2">
                                    <i className="theme-color-text fas fa-star"></i>
                                    <i className="theme-color-text fas fa-star"></i>
                                    <i className="theme-color-text fas fa-star"></i>
                                    <i className="theme-color-text fas fa-star"></i>
                                    <i className="theme-color-text far fa-star"></i>
                                </div>

                                <div className="hover-show-3 ml-3 py-3 bg-white">
                                    <div><i className="text-danger fas fa-circle"></i></div>
                                    <div><i className="text-secondary far fa-heart"></i></div>
                                    <div><i className="text-secondary fas fa-random"></i></div>
                                    <div><i className="text-secondary fas fa-search"></i></div>
                                    <div><i className="theme-color-text fas fa-shopping-cart"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card border-0 container-hover">
                        <img className="position-relative img-overlay" src={Card3} alt="Card cap" />
                        <div className="circle-new2">30%</div>
                        <div className="blue-theme text-white py-2 rounded-bottom position-absolute box-hover">
                            <p className="hide-hover ml-4">Red women's blazer full</p>
                            <div className="hover-content hover-show d-none">
                                <p>Red women's blazer full</p>
                                <span className="border px-2">Fashion</span>
                                <p className="mt-2 mb-1">$220.00</p>
                                <div className="position-absolute">
                                    <h4 className="theme-color-text">$190.00</h4>
                                </div>

                                <div className="hover-show-2">
                                    <i className="theme-color-text fas fa-star"></i>
                                    <i className="theme-color-text fas fa-star"></i>
                                    <i className="theme-color-text fas fa-star"></i>
                                    <i className="theme-color-text fas fa-star"></i>
                                    <i className="theme-color-text far fa-star"></i>
                                </div>

                                <div className="hover-show-3 ml-3 py-3 bg-white">
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
        </div>

    )
}
