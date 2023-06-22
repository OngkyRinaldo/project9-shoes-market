import { createSlice } from '@reduxjs/toolkit';

export const whishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        wishlistItems: [],
    },
    reducers: {
        addToWishlist: (state, action) => {
            const item = state.wishlistItems.find(
                (p) => p.id === action.payload.id
            );
            if (item) {
                item.quantity++;
                item.attributes.price = item.oneQuantityPrice * item.quantity;
            } else {
                state.wishlistItems.push({ ...action.payload, quantity: 1 });
            }
        },
        updateWishlist: (state, action) => {
            state.wishlistItems = state.wishlistItems.map((p) => {
                if (p.id === action.payload.id) {
                    if (action.payload.key === 'quantity') {
                        p.attributes.price =
                            p.oneQuantityPrice * action.payload.val;
                    }
                    return { ...p, [action.payload.key]: action.payload.val };
                }
                return p;
            });
        },
        removeFromWishlist: (state, action) => {
            state.wishlistItems = state.wishlistItems.filter(
                (p) => p.id !== action.payload.id
            );
        },
    },
});

export const { addToWishlist, updateWishlist, removeFromWishlist } =
    whishlistSlice.actions;

export default whishlistSlice.reducer;
