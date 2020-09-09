import React from 'react'

export default function FlashBanner() {
    return (
        <div className="blue-theme pb-5">
            <div className="container">
                <div className="row d-flex">
                     <div className="col-lg-6">
                        <div className="col-lg-6 theme-color text-center pt-4">
                            <div className="">
                                <div className="text-white">
                                    <div className="h1-size1">FLASH</div>
                                    <div className="h1-size1">SALE</div>
                                    <div className="h3-size1 pb-4 mt-3 font-weight-light">UP TO 50% OFF</div>
                                </div>
                            </div>
                        </div>
                     </div>
                     <div className="col-lg-6 text-white py-5 text-lg-left text-sm-center my-5 d-none d-lg-block">
                         <div className="text-center">
                            <div className="d-flex justify-content-around text-center theme-color-text">
                                <div className="bg-white time-circle1">
                                    <h2>7</h2><div className="text-dark">Days</div>
                                </div>
                                <div className="bg-white time-circle1">
                                    <h2>23</h2><div className="text-dark">Hours</div>
                                </div>
                                <div className="bg-white time-circle2">
                                    <h2>46</h2><div className="text-dark">Minutes</div>
                                </div>
                                <div className="bg-white time-circle2">
                                    <h2>12</h2><div className="text-dark">Seconds</div>
                                </div>
                            </div>
                            <button className="btn bg-white _radius theme-color-text px-4 mt-4 py-2 font-weight-bold">SHOP NOW</button>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    )
}
