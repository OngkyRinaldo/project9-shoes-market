import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';

const HeroBanner = () => {
    return (
        <div className='container mx-auto'>
            <video src='./nike.mp4' autoPlay autom />
        </div>
    );
};

export default HeroBanner;
