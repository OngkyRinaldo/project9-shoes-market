import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const about = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
        });
    }, []);
    return (
        <div className='bg-black h-fit font-urbanist text-white  '>
            <video
                src='./about.mp4'
                autoPlay
                loop
                muted
                className='container mx-auto'
            ></video>

            <div className=' container mx-auto font-extrabold  pl-5'>
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
            <div className='container mx-auto'>
                <div className='md:flex md:justify-between items-center'>
                    <div></div>
                    <h2 className='mt-10 px-5 text-2xl font-semibold md:text-4xl md:w-3/5'>
                        We champion continual progress for athletes and sport by
                        taking action to help athletes reach their potential.
                        Every job at NIKE, Inc. is grounded in a team-first
                        mindset, cultivating a culture of innovation and a
                        shared purpose to leave an enduring impact.
                    </h2>
                </div>

                <div className='px-5 mt-10 md:flex' data-aos='fade-up'>
                    <Link href='#' className='flex-1 hidden md:block items-end'>
                        <p className='text-xl mt-5 '>
                            Stories, Volume3: All Movement, All Moments
                        </p>
                        <span className='hover:text-slate-500'>
                            Explore the latest stories &#8594;
                        </span>
                    </Link>
                    <div className='w-full h-36 md:w-1/2 md:h-96 relative mx-auto '>
                        <Image
                            src='/about/pool.jpg'
                            fill={true}
                            className='rounded-lg object-cover '
                        />
                    </div>
                    <Link href='#' className='md:hidden'>
                        <p className='text-xl mt-5 '>
                            Stories, Volume3: All Movement, All Moments
                        </p>
                        <span className='hover:text-slate-500'>
                            Explore the latest stories &#8594;
                        </span>
                    </Link>
                </div>
                <div className='px-5 mt-10 md:flex' data-aos='fade-up'>
                    <div className='w-full h-36 md:w-1/2 md:h-96 relative mx-auto '>
                        <Image
                            src='/about/basket.jpg'
                            fill={true}
                            className='rounded-lg object-cover '
                        />
                    </div>
                    <Link
                        href='#'
                        className='flex-1 hidden md:block items-end md:pl-5'
                    >
                        <p className='text-xl mt-5 '>
                            NIKE, Inc:Keeping athletes at the center of
                            everthing
                        </p>
                        <span className='hover:text-slate-500'>
                            Learn more about NIKE &#8594;
                        </span>
                    </Link>

                    <Link href='#' className='md:hidden'>
                        <p className='text-xl mt-5 '>
                            NIKE, Inc:Keeping athletes at the center of
                            everthing
                        </p>
                        <span className='hover:text-slate-500'>
                            Learn more about NIKE &#8594;
                        </span>
                    </Link>
                </div>
                <div className='px-5 mt-10 md:flex' data-aos='fade-up'>
                    <Link href='#' className='flex-1 hidden md:block items-end'>
                        <p className='text-xl mt-5 '>
                            Our Impact:Breaking Barriers Since 1972
                        </p>
                        <span className='hover:text-slate-500'>
                            Learn More &#8594;
                        </span>
                    </Link>
                    <div className='w-full h-36 md:w-1/2 md:h-96 relative mx-auto '>
                        <Image
                            src='/about/impact.jpg'
                            fill={true}
                            alt='impact.jpg'
                            className='rounded-lg object-cover '
                        />
                    </div>
                    <Link href='#' className='md:hidden'>
                        <p className='text-xl mt-5 '>
                            Our Impact:Breaking Barriers Since 1972
                        </p>
                        <span className='hover:text-slate-500'>
                            Learn More &#8594;
                        </span>
                    </Link>
                </div>
            </div>
            <div
                className='grid grid-rows-1 md:grid-cols-3 gap-3 mt-10 '
                data-aos='fade-up'
            >
                <div className='px-5'>
                    <div className='w-full h-36  md:h-64 relative mx-auto '>
                        <Image
                            src='/about/airjordan1.jpg'
                            fill={true}
                            className='rounded-lg object-cover '
                        />
                    </div>
                    <p className='text-xl font-semibold my-5'>
                        How Motion and Emotion Power Jordan Brand Basketball
                        Design for the Next Generation
                    </p>
                    <p className='text-base text-slate-500'>July 01,2023</p>
                </div>
                <div className='px-5'>
                    <div className='w-full h-36  md:h-64 relative mx-auto '>
                        <Image
                            src='/about/airjordan2.jpg'
                            fill={true}
                            alt='airjordan2.jpg'
                            className='rounded-lg object-cover '
                        />
                    </div>
                    <p className='text-xl font-semibold my-5'>
                        The Air Jordan XXXVIII Takes Court Mobility to Another
                        Level
                    </p>
                    <p className='text-base text-slate-500'>July 01,2023</p>
                </div>
                <div className='px-5'>
                    <div className='w-full h-36  md:h-64 relative mx-auto '>
                        <Image
                            src='/about/airjordan3.jpg'
                            fill={true}
                            alt='airjordan3.jpg'
                            className='rounded-lg object-cover '
                        />
                    </div>
                    <p className='text-xl font-semibold my-5'>
                        The Zion 3 Contains Your Strongest Moves
                    </p>
                    <p className='text-base text-slate-500'>July 01,2023</p>
                </div>
            </div>
        </div>
    );
};

export default about;
