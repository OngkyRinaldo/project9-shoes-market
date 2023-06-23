import React from 'react';

const about = () => {
    return (
        <div className='main  bg-black'>
            <video
                src='./nike.mp4'
                autoPlay
                loop
                muted
                className='container mx-auto'
            ></video>
        </div>
    );
};

export default about;
