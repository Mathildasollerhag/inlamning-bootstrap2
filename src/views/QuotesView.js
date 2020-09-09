import React from 'react';
import QuotesCard from '../components/QuotesCard';

export default function QuotesView() {
    return (
        <div className="mt-5 container-fluid blue-theme mb-5">
            <div id="carouselExampleIndicators3" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators indicators-quotes ">
                    <li data-target="#carouselExampleIndicators3" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <QuotesCard />
                    </div>
                    <div className="carousel-item">
                        <QuotesCard />
                    </div>
                    <div className="carousel-item">
                        <QuotesCard />
                    </div>
                </div>
                <a className="carousel-control-prev quote-arrow-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev" >
                    <span className="carousel-control-prev-icon" aria-hidden="true"> <i className=" fa-2x mr-1 mt-2 fas fa-chevron-left"></i></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next quote-arrow-next" href="#carouselExampleIndicators3" role="button" data-slide="next">
                    <span className="carousel-control-next-icon " aria-hidden="true"><i className=" fa-2x mt-2 ml-1 fas fa-chevron-right"></i></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
