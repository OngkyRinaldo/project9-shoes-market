import Image from 'next/image';
import React from 'react';
import { BsSearch } from 'react-icons/bs';

const contact = () => {
    return (
        <div className='container mx-auto font-urbanist mt-12 h-fit mb-5'>
            <h2 className='uppercase text-center font-bold text-xl'>
                get help
            </h2>
            <div className='flex flex-col justify-center items-center mt-10'>
                <input
                    type='text'
                    placeholder='What can we help you with?'
                    className='border py-2 px-5 rounded-md w-3/4 text-base lg:w-1/2'
                />
                <BsSearch className='relative -mt-7 -mr-[250px] lg:-mr-[620px]' />
            </div>
            <div className='px-5 text-center mt-10  '>
                <h2 className='text-2xl font-bold uppercase'>quick assists</h2>
                <p className='text-base  px-5 md:px-0'>
                    Answers to our most frequently asked questions are just one
                    click away
                </p>
                <hr className='mt-5 text-black hidden md:block' />
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-10'>
                    <div className=' cursor-pointer'>
                        <h2 className='text-xl font-bold uppercase'>
                            dispatch & delivery
                        </h2>
                        <p className='text-center md:text-left'>
                            How can i get free delivery on Nike orders?
                        </p>
                        <p className='text-center md:text-left'>
                            What are Nike's delivery options?
                        </p>
                        <p className='text-center md:text-left'>
                            Can my Nike order be dispatched internationally?
                        </p>
                    </div>
                    <div className=' cursor-pointer'>
                        <h2 className='text-xl font-bold uppercase'>returns</h2>
                        <p className='text-center md:text-left'>
                            What is Nike's returns policy?
                        </p>
                        <p className='text-center md:text-left'>
                            How do I return my Nike order?
                        </p>
                        <p className='text-center md:text-left'>
                            Where is my refund?
                        </p>
                    </div>

                    <div className=' cursor-pointer'>
                        <h2 className='text-xl font-bold uppercase'>
                            Nike membership
                        </h2>
                        <p className='text-center md:text-left'>
                            What is Nike Membership?
                        </p>
                        <p className='text-center md:text-left'>
                            How do I become a Nike Member?
                        </p>
                        <p className='text-center md:text-left'>
                            How do I get the most out of NRC and NTC?
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-10'>
                    <div className=' cursor-pointer'>
                        <h2 className='text-xl font-bold uppercase'>orders</h2>
                        <p className='text-center md:text-left'>
                            Where is my Nike order?
                        </p>
                        <p className='text-center md:text-left'>
                            Can I cancel or change my Nike order?
                        </p>
                        <p className='text-center md:text-left'>
                            What payment options can I use on Nike orders?
                        </p>
                    </div>
                    <div className='cursor-pointer'>
                        <h2 className='text-xl font-bold uppercase'>
                            {' '}
                            product info
                        </h2>
                        <p className='text-center md:text-left'>
                            How do I get Nike’s newest sneaker releases?
                        </p>
                        <p className='text-center md:text-left'>
                            How do I find the right size and fit?
                        </p>
                        <p className='text-center md:text-left'>
                            What is the Nike By You personalisation policy?
                        </p>
                        <p className='text-center md:text-left'>
                            Do Nike shoes have a warranty?
                        </p>
                    </div>
                    <div className='cursor-pointer'>
                        <h2 className='text-xl font-bold uppercase'>
                            corporate
                        </h2>
                        <p className='text-center md:text-left'>
                            Where can I learn more about Nike, Inc.?
                        </p>
                        <p className='text-center md:text-left'>
                            Where is the Nike store closest to me?
                        </p>
                    </div>
                </div>
            </div>

            <div className='px-5 text-center mt-10'>
                <h2 className='uppercase text-center font-bold text-xl'>
                    Contact us
                </h2>
                <hr className='text-black hidden md:block md:mt-5' />
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-10'>
                    <div className='cursor-pointer'>
                        <div className=' w-10 h-10 relative mx-auto'>
                            <Image
                                src='/contact/smartphone-call.png'
                                alt='smartphone-call.png'
                                fill={true}
                            />
                        </div>
                        <p className='mt-10 font-bold '>012-345-678-90</p>
                        <p>
                            Products & Orders: 24 hours a day, 7 days a week
                            Company Info & Enquiries: 09:00 - 18:00, Monday -
                            Friday
                        </p>
                    </div>
                    <div className='cursor-pointer'>
                        <div className=' w-10 h-10 relative mx-auto'>
                            <Image
                                src='/contact/chat.png'
                                alt='chat.png'
                                fill={true}
                            />
                        </div>
                        <p className='mt-10 font-bold '>24 hours a day</p>
                        <p>7 days a week</p>
                    </div>
                    <div className='cursor-pointer'>
                        <div className=' w-10 h-10 relative mx-auto'>
                            <Image
                                src='/contact/location.png'
                                alt='location.png'
                                fill={true}
                            />
                        </div>
                        <p className='mt-10 font-bold '>STORE LOCATOR</p>
                        <p>Find Nike retail stores near you</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default contact;
