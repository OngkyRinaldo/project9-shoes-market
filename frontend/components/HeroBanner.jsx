import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const HeroBanner = () => {
    return (
        <div className='container mx-auto'>
            <video src='./nike.mp4'
                autoPlay={true}
                // autom={true}
                loop={true}
                muted={true}
            />
        </div>
    );
};

export default HeroBanner;
