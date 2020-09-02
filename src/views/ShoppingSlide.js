import React from 'react';
import Group from '../images/Banner-thumb.png';

export default function ShoppingSlide() {
    return (
        <div className="container-fluid _bg-carousel">
            <div className="container">
                <div className="row mx-auto my-auto">
                    <div id="myCarousel" className="carousel slide w-100" data-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-lg-5 align-self-center mb-5">
                                        <h1 className="_shopping-font mt-5 font-weight-normal">Shopping is</h1>
                                        <h1 className="theme-color-text _shopping-font font-weight-bold">MORE FUN</h1>
                                        <p>Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed.</p>
                                        <button href="/#" className=" mt-4 btn bg-white py-2 px-4 _radius theme-color-text">SHOP NOW</button>
                                    </div>
                                    <div className="col-lg-7">
                                        <img className="img-fluid" src={Group} alt="Shopping" />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-lg-5 align-self-center mb-5">
                                        <h1 className="_shopping-font mt-5 font-weight-normal">Shopping is</h1>
                                        <h1 className="theme-color-text _shopping-font font-weight-bold">MORE FUN</h1>
                                        <p>Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed.</p>
                                        <button href="/#" className=" mt-4 btn bg-white py-2 px-4 _radius theme-color-text">SHOP NOW</button>
                                    </div>
                                    <div className="col-lg-7">
                                        <img className="img-fluid" src={Group} alt="Shopping" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
