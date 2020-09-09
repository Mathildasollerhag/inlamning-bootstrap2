import React from 'react';
import LatestBlogCard from '../components/LatestBlogCard';
import Zig from '../images/Path 44.png';

export default function LatestBlogView() {
    return (
        <div className="container mb-15">
            <div className="text-center pt-5">
                <h1 className="font-weight-bold">LATEST <span className="theme-color-text">BLOG</span></h1>
                <img src={Zig} alt="Logo" />
                <p className="mt-3">Read our latest posts about our events and trending news</p>
                <button className=" d-block d-sm-none mt-4 btn px-5 pt-3 pb-2 bg__btn__blue mx-auto btn__radius__header theme-color-text text-uppercase font-weight-bold btn-sm"><h6>Read the blogs</h6></button>
            </div>
            <div id="carouselExampleIndicators" className="carousel d-none d-sm-block slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <LatestBlogCard />
                    </div>
                    <div className="carousel-item ">
                        <LatestBlogCard />
                    </div>
                    <div className="carousel-item ">
                        <LatestBlogCard />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"> <i className=" fa-2x  mt-2 mr-1 fas fa-chevron-left"></i></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon " aria-hidden="true"><i className=" fa-2x mt-2 ml-1 fas fa-chevron-right"></i></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
