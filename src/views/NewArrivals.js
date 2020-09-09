import React from 'react';
import Zig from '../images/Path 44.png';
import ProductCards from '../components/products/ProductCards';

export default function NewArrivals() {
    return (
        <div className="container pt-5 mt-5 mb-5">
            <div className="text-center">
                <h1 className="font-weight-bold">NEW <span className="theme-color-text">ARRIVALS</span></h1>
                <img src={Zig} alt="Icon" />
                <p className="mt-3">Check out our latest products from top fashion designers</p>
            </div>
            <div id="carouselExampleIndicators1" className="carousel d-none d-sm-block slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators1" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <ProductCards />
                    </div>
                    <div className="carousel-item ">
                        <ProductCards />
                    </div>
                    <div className="carousel-item ">
                        <ProductCards />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"> <i className=" fa-2x  mt-2 fas fa-chevron-left"></i></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                    <span className="carousel-control-next-icon " aria-hidden="true"><i className=" fa-2x mt-2 fas fa-chevron-right"></i></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
