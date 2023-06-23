import React from 'react';
import { BsSearch } from 'react-icons/bs';

const contact = () => {
    return (
        <div className='container mx-auto font-Futura mt-36 h-screen'>
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
        </div>
    );
};

export default contact;
