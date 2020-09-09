import React from 'react';
import Zig from '../images/Path 44.png';

export default function MasonryGrid() {
    return (
        <div>
            <div className="container pt-5 mt-5 mb-5">
            <div className="text-center">
            <h1 className="font-weight-bold">SHOP BY <span className="theme-color-text">CATEGORY</span></h1>
           <img src={Zig} alt="Icon" />
           <p className="mt-3">We always try to give you the best product within a fast and reliable way</p>
            </div>

           <div className="container d-none d-sm-block">
    <div className="grid-layout">
        <div className="grid-item d-flex">
            <div className="blue-theme align-self-end col-6 py-2 inline__radius">
                <p className="my-auto">Men</p>
            </div>
            
        </div>
        <div className="grid-item span-4 d-flex">
            <div className="blue-theme align-self-end col-6 py-2 inline__radius">
                <p className="my-auto">Women</p>
            </div>
        </div>
        <div className="grid-item span-2 d-flex">
            <div className="blue-theme align-self-end col-6 py-2 inline__radius">
                <p className="my-auto">Kids</p>
            </div>
        </div>
        <div className="grid-item span-2 d-none d-lg-flex">
            <div className="blue-theme align-self-end col-6 py-2 inline__radius">
                <p className="my-auto">Shoes</p>
            </div>
        </div>
        <div className="grid-item d-flex">
            <div className="blue-theme align-self-end col-6 py-2 inline__radius">
                <p className="my-auto">Hats</p>
            </div>
        </div>
        <div className="grid-item span-4 d-none d-lg-flex">
            <div className="blue-theme align-self-end col-6 py-2 inline__radius">
                <p className="my-auto">Sunglasses</p>
                <p className="my-auto text-white font-weight-light">18 products</p>
            </div>
        </div>
        <div className="grid-item d-flex">
            <div className="blue-theme align-self-end col-6 py-2 inline__radius">
                <p className="my-auto">Watches</p>
            </div>
        </div>
   
    </div>

</div>
        </div>
        </div>
    )
}
