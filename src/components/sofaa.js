import React from 'react';
import explore4 from '../assets/img/explore4.png';
// Ensure you have this CSS file

const MyCarousel = () => {
    return (
        <div className="card my-card mb-5">
            <img src={explore4} className="card-img-top" alt="Syltherine Stylish Cafe Chair" />
            <div className="share-button">
                {/* This is the new div for the share button */}
                <button type="button">Share</button>
            </div>
            <div className="number">-30% </div>
            <div className="card-body pb-5">
                <h5 className="card-title2">Syltherine</h5>
                <p className="card-text2">Stylish cafe chair</p>
            </div>
        </div>
    );
};

export default MyCarousel;
