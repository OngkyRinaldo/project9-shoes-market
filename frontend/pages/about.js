import React from 'react';

const about = () => {
    return (
        <div className='bg-black h-fit'>
            <video
                src='./about.mp4'
                autoPlay
                loop
                muted
                className='container mx-auto'
            ></video>

            <div className=' container mx-auto text-white font-extrabold font-Futura pl-5'>
                <div className='absolute -mt-52 lg:-mt-[600px]'>
                    <h2 className='text-xs lg:text-lg'>Our Mission</h2>
                    <h1 className='text-sm lg:text-6xl uppercase'>
                        bring <span className='block'>inpiration</span>
                        <span className='block'>and</span>
                        <span className='block'> innovation</span>
                        <span className='block'>to</span>
                        <span className='block'>every</span>
                        <span className='block'>athlete*</span>
                        <span className='block'>in the</span>
                        <span
                            className='block
                        '
                        >
                            world
                        </span>
                        <span className='italic block text-xs normal-case'>
                            *if you have a body, you are an athlete
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default about;
