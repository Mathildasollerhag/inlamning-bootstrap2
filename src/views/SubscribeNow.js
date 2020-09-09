import React from 'react';
import Box from '../images/graybox.png';

export default function SubscribeNow() {
    return (
        <div className="_bg-carousel">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-8 align-self-center">
                        <div className="d-flex">
                            <h1 className="mr-3 mt-4 font-weight-bold">SUBSCRIBE</h1>
                            <h1 className="mt-4 theme-color-text font-weight-bold">NOW</h1>
                        </div>
                        <div className="mt-3">
                            Signup for awesome news about our new products and know our special discounts on products.
                        </div>
                        <div className="mt-4">
                            <input type="text" className="form-control _radius position-relative" placeholder="Enter email address" />
                            <button className="py-1 button-pos position-absolute btn theme-color text-white _radius" type="button">Subscribe</button>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12 d-none d-xl-block">
                        <img className="img-fluid" src={Box} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
