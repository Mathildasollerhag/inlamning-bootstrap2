import React from 'react';
import Zig from '../images/Path 44.png';
import ProductCards1 from '../components/products/ProductCards1';

export default function FeaturedProducts() {
    return (
        <div className="container pt-5 mt-5 mb-5">
            <div className="text-center">
                <h1 className="font-weight-bold">FEATURED <span className="theme-color-text">PRODUCTS</span></h1>
                <img src={Zig} alt="Icon" />
                <p className="mt-3">Check out our monthly featured products from top brands</p>
            </div>
            <div id="carouselExampleIndicators2" className="carousel d-none d-sm-block slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators2" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <ProductCards1 />
                    </div>
                    <div className="carousel-item ">
                        <ProductCards1 />
                    </div>
                    <div className="carousel-item ">
                        <ProductCards1 />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"> <i className=" fa-2x  mt-2 fas fa-chevron-left"></i></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <span className="carousel-control-next-icon " aria-hidden="true"><i className=" fa-2x mt-2 fas fa-chevron-right"></i></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}