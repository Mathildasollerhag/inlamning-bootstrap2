import React from 'react';
import Zig from '../images/Path 44.png';
import ProductCards2 from '../components/products/ProductCards2';

export default function TopSellers() {
    return (
        <div className="container pt-5 mt-5 mb-5">
            <div className="text-center">
                <h1 className="font-weight-bold">TOP <span className="theme-color-text">SELLERS</span></h1>
                <img src={Zig} alt="Icon" />
                <p className="mt-3">Check out our weekly top sellers in all category</p>
            </div>
            <ProductCards2 />
        </div>
    )
}
