import React from 'react'

export default function InfoCards() {
    return (
        <div className="row mx-5 mt-5 _lg-block">
            <div className="bg_cards rounded col-11 col-lg ml-4" id="_cards-hover">
                <div className="card-body d-flex mt-2">
                    <i className="theme-color-text fa-3x fas fa-box-open col-3 my-auto"></i>
                    <div className="col-8">
                        <h6 className="theme-color-text">Free shipping</h6>
                        <p className="">For a local customer, we provide free shipping facility</p>
                    </div>
                </div>
            </div>
            <div className="bg_cards rounded col-11 col-lg ml-4" id="_cards-hover">
                <div className="card-body d-flex mt-2">
                    <i className="theme-color-text fa-3x col-3 my-auto far fa-clock"></i>
                    <div className="col-8">
                        <h6 className="theme-color-text">24/7 support</h6>
                        <p>For any inquiry, we are available 24 hours every day</p>
                    </div>
                </div>
            </div>
            <div className="bg_cards rounded col-11 col-lg ml-4" id="_cards-hover">
                <div className="card-body d-flex mt-2">
                    <i className="theme-color-text fa-3x col-3 my-auto fas fa-money-check-alt"></i>
                    <div className="col-8">
                        <h6 className="theme-color-text">Online payment</h6>
                        <p>You can pay quickly and easily with our online system</p>
                    </div>
                </div>
            </div>
            <div className="bg_cards rounded col-11 col-lg ml-4" id="_cards-hover">
                <div className="card-body d-flex mt-2">
                    <i className="theme-color-text fa-3x col-3 my-auto fas fa-shipping-fast"></i>
                    <div className="col-8">
                        <h6 className="theme-color-text">Fast delivery</h6>
                        <p>We understand your urgency and we deliver in a fast way</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
