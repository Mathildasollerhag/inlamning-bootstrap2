import React from 'react';
import Blog from '../images/Blog.png';

export default function LatestBlogCard() {
    return (
        <div className="row">
            <div className="col-lg-3 rounded d-none d-lg-block">
                <img src={Blog} alt="Logo" />
            </div>
            <div className="blue-theme col-sm-12 col-md-6 col-lg-3 rounded height__card">
                <div className="theme-color col-3 text-white pb-3">
                    <h1 className="blog-h1-size font-weight-bold pt-2">29</h1>
                    <span>MAR</span>
                </div>
                <div className="text-white mt-3 col-10">
                    <small className="border-bottom">By Adam Moore</small>
                    <p className="mt-2 mb-3 theme-color-text font-weight-bold">A beautiful scenery in the world we are missing</p>
                    <div>
                        <span className=" border px-2 mr-2">Travel</span>
                        <span className="border px-2">Fashion</span>
                    </div>
                    <button className=" mt-3 btn px-3 py-1  btn-light btn__radius__header theme-color-text   btn-sm"> Read More</button>
                </div>
            </div>
            <div className="col-lg-3 rounded d-none d-lg-block">
                <img src={Blog} alt="Logo" />
            </div>
            <div className="blue-theme col-sm-12 col-md-6 col-lg-3 rounded height__card">
                <div className="theme-color col-3 text-white pb-3 ">
                    <h1 className="blog-h1-size font-weight-bold pt-2">18</h1>
                    <span>JUL</span>
                </div>
                <div className="text-white mt-3 col-10">
                    <small className="border-bottom">By Adam Moore</small>
                    <p className="mt-2 mb-3 theme-color-text font-weight-bold">A beautiful scenery in the world we are missing</p>
                    <div>
                        <span className=" border px-2 mr-2">Travel</span>
                        <span className="border px-2">Fashion</span>
                    </div>
                    <button className=" mt-3 btn px-3 py-1  btn-light btn__radius__header theme-color-text   btn-sm"> Read More</button>
                </div>
            </div>
        </div>
    )
}
