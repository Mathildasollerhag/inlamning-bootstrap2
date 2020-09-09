import React from 'react';

export default function DiscountBanner() {
    return (
        <div className="theme-gray">
            <div className="container">
                <div className="row d-flex justify-content-center">
                     <div className="col-lg-6">
                        <div className="col-lg-6 theme-color text-center py-5">
                            <div className="my-5">
                                <div className="text-white">
                                    <span className="h1-size">30%</span>
                                    <span className="h3-size">OFF</span>
                                    <p>FOR NEW CUSTOMER</p>
                                </div>
                                    <button className="btn blue-theme text-white _radius px-4">SHOP NOW</button>
                            </div>
                                
                        </div>
                     </div>
                     <div className="col-lg-6 text-white py-5 text-lg-left text-sm-center my-5">
                        <p>Donec pulvinar arcu vitae ipsum varius cursus. Nunc iaculis fermentum iaculis. Nunc pulvinar purus at erat lacinia, ut convallis nibh consequat. Integer nulla nisi, aliquam at tellus a, viverra scelerisque purus. Nam pretium iaculis ultrices.</p>
                        <button className="btn bg-white _radius theme-color-text px-4 mt-4">LEARN MORE</button>
                     </div>
                </div>
            </div>
        </div>
    )
}
