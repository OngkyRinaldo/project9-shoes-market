import React, { useState } from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import Wrapper from '@/components/Wrapper';
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';
import { fetchDataFromApi } from '@/utils/api';
import { getDiscountedPricePercentage } from '@/utils/helper';
import ReactMarkdown from 'react-markdown';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToWishlist } from '@/store/wishlistSlice';

const ProductDetails = ({ product, products }) => {
    const [selectedSize, setSelectedSize] = useState();
    const [showError, setShowError] = useState(false);
    const dispatch = useDispatch();
    const p = product?.data?.[0]?.attributes;

    const notify = () => {
        toast.success('Success. Check your cart!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        });
    };

    const notifyWishlist = () => {
        toast.success('Success. Check your wishlist!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        });
    };

    return (
        <div className='w-full md:py-20 bg-[#E5E5E5]'>
            <ToastContainer />
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                    {/* left column start */}
                    <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0  '>
                        <ProductDetailsCarousel images={p.image.data} />
                    </div>
                    {/* left column end */}

                    {/* right column start */}
                    <div className='flex-[1] py-3'>
                        {/* PRODUCT TITLE */}
                        <div className='text-[34px] font-semibold mb-2 leading-tight'>
                            {p.name}
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className='text-lg font-semibold mb-5'>
                            {p.subtitle}
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className='flex items-center'>
                            <p className='mr-2 text-lg font-semibold'>
                                ${p.price}
                            </p>
                            {p.original_price && (
                                <>
                                    <p className='text-base  font-medium line-through'>
                                        ${p.original_price}
                                    </p>
                                    <p className='ml-auto text-base font-medium text-green-500'>
                                        {getDiscountedPricePercentage(
                                            p.original_price,
                                            p.price
                                        )}
                                        % off
                                    </p>
                                </>
                            )}
                        </div>

                        <div className='text-md font-medium text-black/[0.5]'>
                            incl. of taxes
                        </div>
                        <div className='text-md font-medium text-black/[0.5] mb-20'>
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* PRODUCT SIZE RANGE START */}
                        <div className='mb-10'>
                            {/* HEADING START */}
                            <div className='flex justify-between mb-2'>
                                <div className='text-md font-semibold'>
                                    Select Size
                                </div>
                                <div className='text-md font-medium text-black cursor-pointer'>
                                    Select Guide
                                </div>
                            </div>
                            {/* HEADING END */}

                            {/* SIZE START */}
                            <div
                                id='sizesGrid'
                                className='grid grid-cols-3 gap-2'
                            >
                                {p.size.data.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`border rounded-md text-center py-3 font-medium  border-black ${
                                            item.enabled
                                                ? 'hover:border-black hover:bg-white cursor-pointer'
                                                : 'cursor-not-allowed bg-black/[0.1] opacity-50'
                                        } ${
                                            selectedSize === item.size
                                                ? 'border-black bg-white border '
                                                : ''
                                        }`}
                                        onClick={() => {
                                            setSelectedSize(item.size);
                                            setShowError(false);
                                        }}
                                    >
                                        {item.size}
                                    </div>
                                ))}
                            </div>
                            {/* SIZE END */}

                            {/* SHOW ERROR START */}
                            {showError && (
                                <div className='text-red-600 mt-1'>
                                    Size selection is required
                                </div>
                            )}
                            {/* SHOW ERROR END */}
                        </div>
                        {/* PRODUCT SIZE RANGE END */}

                        <div className='flex justify-center items-center gap-2 mb-3 '>
                            {/* ADD TO CART BUTTON START */}
                            <button
                                className='w-1/2 py-4 rounded-full bg-[#A9FF20] text-black border border-black text-lg font-medium transition-transform active:scale-95  hover:opacity-75'
                                onClick={() => {
                                    if (!selectedSize) {
                                        setShowError(true);
                                        document
                                            .getElementById('sizesGrid')
                                            .scrollIntoView({
                                                block: 'center',
                                                behavior: 'smooth',
                                            });
                                    } else {
                                        dispatch(
                                            addToCart({
                                                ...product?.data?.[0],
                                                selectedSize,
                                                oneQuantityPrice: p.price,
                                            })
                                        );
                                        notify();
                                    }
                                }}
                            >
                                Add to Cart
                            </button>
                            {/* ADD TO CART BUTTON END */}

                            {/* WHISHLIST BUTTON START */}
                            <button
                                className='w-1/2 py-4 rounded-full border bg-white border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 '
                                onClick={() => {
                                    if (!selectedSize) {
                                        setShowError(true);
                                        document
                                            .getElementById('sizesGrid')
                                            .scrollIntoView({
                                                block: 'center',
                                                behavior: 'smooth',
                                            });
                                    } else {
                                        dispatch(
                                            addToWishlist({
                                                ...product?.data?.[0],
                                                selectedSize,
                                                oneQuantityPrice: p.price,
                                            })
                                        );
                                        notifyWishlist();
                                    }
                                }}
                            >
                                Whishlist
                                <IoMdHeartEmpty size={20} />
                            </button>
                            {/* WHISHLIST BUTTON END */}
                        </div>

                        <div>
                            <div className='text-lg font-bold mb-5'>
                                Product Details
                            </div>
                            <div className='markdown text-md mb-5'>
                                <ReactMarkdown>{p.description}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                    {/* right column end */}
                </div>

                <RelatedProducts products={products} />
            </Wrapper>
        </div>
    );
};

export default ProductDetails;

export async function getStaticPaths() {
    const products = await fetchDataFromApi('/api/products?populate=*');
    const paths = products?.data?.map((p) => ({
        params: {
            slug: p.attributes.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const product = await fetchDataFromApi(
        `/api/products?populate=*&filters[slug][$eq]=${slug}`
    );
    const products = await fetchDataFromApi(
        `/api/products?populate=*&[filters][slug][$ne]=${slug}`
    );

    return {
        props: {
            product,
            products,
        },
    };
}
