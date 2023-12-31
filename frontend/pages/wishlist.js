import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import Wrapper from '@/components/Wrapper';
import CartItem from '@/components/CartItem';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { makePaymentRequest } from '@/utils/api';
import { loadStripe } from '@stripe/stripe-js';
import WishlistItem from '@/components/WishlistItem';

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const wishlist = () => {
    const [loading, setLoading] = useState(false);
    const { wishlistItems } = useSelector((state) => state.wishlist);

    const subTotal = useMemo(() => {
        return wishlistItems.reduce(
            (total, val) => total + val.attributes.price,
            0
        );
    }, [wishlistItems]);

    const handlePayment = async () => {
        try {
            setLoading(true);
            const stripe = await stripePromise;
            const res = await makePaymentRequest('/api/orders', {
                products: wishlistItems,
            });
            await stripe.redirectToCheckout({
                sessionId: res.stripeSession.id,
            });
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    return (
        <>
            {wishlistItems.length > 0 && (
                <div className='w-full md:py-20 bg-[#E5E5E5]'>
                    <Wrapper>
                        <>
                            {/* HEADING AND PARAGRAPH START */}
                            <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
                                <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
                                    Wishlist Shopping
                                </div>
                            </div>
                            {/* HEADING AND PARAGRAPH END */}

                            {/* WISHLIST CONTENT START */}
                            <div className='flex flex-col lg:flex-row gap-12 py-10'>
                                {/* WISHLIST ITEMS START */}
                                <div className='flex-[2]'>
                                    <div className='text-lg font-bold'>
                                        Wishlist Items
                                    </div>
                                    {wishlistItems.map((item) => (
                                        <WishlistItem
                                            key={item.id}
                                            data={item}
                                        />
                                    ))}
                                </div>
                                {/* WISHLIST ITEMS END */}

                                {/* SUMMARY START */}
                                <div className='flex-[1]'>
                                    <div className='text-lg font-bold'>
                                        Summary
                                    </div>

                                    <div className='p-5 my-5 bg-black/[0.05] rounded-xl'>
                                        <div className='flex justify-between'>
                                            <div className='uppercase text-md md:text-lg font-medium text-black'>
                                                Subtotal
                                            </div>
                                            <div className='text-md md:text-lg font-medium text-black'>
                                                ${subTotal}
                                            </div>
                                        </div>
                                        <div className='text-sm md:text-md py-5 border-t mt-5'>
                                            The subtotal reflects the total
                                            price of your order, including
                                            duties and taxes, before any
                                            applicable discounts. It does not
                                            include delivery costs and
                                            international transaction fees.
                                        </div>
                                    </div>

                                    {/* BUTTON START */}
                                    <button
                                        className='w-full py-4 rounded-full bg-[#A9FF20] text-black border border-black text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center'
                                        onClick={handlePayment}
                                    >
                                        Checkout
                                        {loading && <img src='/spinner.svg' />}
                                    </button>
                                    {/* BUTTON END */}
                                </div>
                                {/* SUMMARY END */}
                            </div>
                            {/* WISHLIST CONTENT END */}
                        </>
                    </Wrapper>
                </div>
            )}

            {/* This is empty screen */}
            {wishlistItems.length < 1 && (
                <div className='w-full md:py-20 '>
                    <Wrapper>
                        <div className='flex-[2] flex flex-col items-center pb-[50px] md:-mt-14'>
                            <Image
                                src='/empty-cart.jpg'
                                width={300}
                                height={300}
                                className='w-[300px] md:w-[400px]'
                            />
                            <span className='text-xl font-bold'>
                                Your wishlist is empty
                            </span>
                            <span className='text-center mt-4'>
                                Looks like you have not added anything in your
                                wishlist.
                                <br />
                                Go ahead and explore top categories.
                            </span>
                            <Link
                                href='/'
                                className='py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8'
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </Wrapper>
                </div>
            )}
        </>
    );
};

export default wishlist;
