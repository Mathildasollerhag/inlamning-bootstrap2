import React from 'react';
import Quote from '../images/Quote.png';
import QuoteContent from '../images/Quotecontent.png';


export default function QuotesCard() {
    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <img src={Quote} alt="Logo"/>
                </div>
                <div className="col-lg-12 text-center mt-4">
                    <img src={QuoteContent} alt="Logo" />
                </div>
                <div className=" col-lg-12 text-center mt-3">
                    <i className="theme-color-text fas fa-star"></i>
                    <i className="theme-color-text fas fa-star"></i>
                    <i className="theme-color-text fas fa-star"></i>
                    <i className="theme-color-text fas fa-star"></i>
                    <i className="theme-color-text far fa-star"></i>
                </div>
                <div className="col-lg-12 text-center mt-3">
                    <span className="theme-color-text pb-1 text-uppercase">Johnny WesMullar</span> <br></br>
                    <small className="text-white">CEO, Biotech Inc.</small>
                </div>
                <div className="col-lg-10 offset-lg-1 text-center text-white pb-5 mt-2 text-wrap">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                        </p>
                </div>
            </div>
        </div>
    )
}
