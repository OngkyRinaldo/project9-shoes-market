import HeroBanner from '@/components/HeroBanner';
import Wrapper from '@/components/Wrapper';
import ProductCard from '@/components/ProductCard';
import { useEffect, useState } from 'react';
import { fetchDataFromApi } from '@/utils/api';

export default function Home({ products }) {
    return (
        <main>
            <HeroBanner />

            {/* Heading and Paragraph start */}
            <Wrapper>
                <div className=' max-w-[800px] mx-auto my-[50px] md:my-[80px]'>
                    <h2 className='text-black font-bold text-left md:text-center lg:text-2xl '>
                        Summer Kicks
                    </h2>
                    <h1 className='font-Futura  text-left uppercase text-3xl  md:text-5xl mb-5 font-extrabold leading-tight md:text-center '>
                        step into summer style
                    </h1>
                    <div className='font-Futura text-left md:text-xl md:text-center '>
                        For Days when you need fresh kicks that can keep up with
                        your every move.
                        <span className='font-semibold block'>
                            #ChaseTheday
                        </span>
                    </div>
                </div>
                {/* Heading and Paragraph end */}

                {/* Product Grid start */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0 '>
                    {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}

                    {/* <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard /> */}
                </div>
                {/* Product Grid end */}
            </Wrapper>
        </main>
    );
}

export async function getStaticProps() {
    const products = await fetchDataFromApi('/api/products?populate=*');

    return {
        props: { products },
    };
}
