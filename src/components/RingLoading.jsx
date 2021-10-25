import React from 'react'
import LoadingRing from "../images/gold-ring.svg";

function RingLoading() {
    return (
        <div className="loading-div-details">
            <img className="loading-animation" src={LoadingRing} alt="Loading-img" />
        </div>
    );
}

export default RingLoading;
