import HeroBanner from '@/components/HeroBanner';
import Wrapper from '@/components/Wrapper';
import ProductCard from '@/components/ProductCard';
import { fetchDataFromApi } from '@/utils/api';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import RelatedProducts from '@/components/RelatedProducts';

export default function Home({ products }) {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
        });
    }, []);
    return (
        <main className='bg-[#E5E5E5]'>
            <HeroBanner />

            {/* Heading and Paragraph start */}
            <Wrapper>
                <div
                    className=' max-w-[800px] mx-auto my-[50px] md:my-[80px]'
                    data-aos='flip-up'
                >
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
                <div className='flex justify-between items-center flex-wrap'>
                    <h2 className='font-bold'>Trending</h2>
                    <Link
                        href='products'
                        className='border py-2 px-4 border-black bg-[#A9FF20] rounded-lg font-semibold'
                    >
                        More Products
                    </Link>
                </div>
                {/* <div
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 pb-5 px-5 md:px-0 '
                    data-aos='zoom-in'
                >
                    {products?.data?.slice(0, 3).map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                </div> */}

                <RelatedProducts products={products} />
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
