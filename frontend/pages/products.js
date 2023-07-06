import ProductCard from '@/components/ProductCard';
import { fetchDataFromApi } from '@/utils/api';
import Image from 'next/image';

const products = ({ products }) => {
    return (
        <div className='w-full  bg-[#E5E5E5]'>
            <div className='container mx-auto '>
                <Image
                    src='/nike.png'
                    alt='nike.png'
                    width={1920}
                    height={1280}
                    className='object-cover'
                />

                <div className='text-center font-oswald mt-5 '>
                    <h2 className='text-2xl md:text-5xl font-bold uppercase'>
                        Never Before.
                        <span className='block'>forever after.</span>
                    </h2>

                    <p className='text-md md:text-lg text-slate-600'>
                        Match day or any day, show up for your team in style
                        with the 2023 Nike National Team Collections.{' '}
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 pb-14 px-5 md:px-0 '>
                    {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default products;

export async function getStaticProps() {
    const products = await fetchDataFromApi('/api/products?populate=*');

    return {
        props: { products },
    };
}
