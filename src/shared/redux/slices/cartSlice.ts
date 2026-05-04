import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItemType } from "../../types/cart";

interface CartState {
    items: CartItemType[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItemType>) => {
            const existingItem = state.items.find(
                (item) =>
                    item.id === action.payload.id &&
                    item.size === action.payload.size &&
                    item.color === action.payload.color
            );

            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },

        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },
        increaseQty: (state, action: PayloadAction<string>) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item) item.quantity += 1;
        },
        decreaseQty: (state, action: PayloadAction<string>) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item && item.quantity > 1) item.quantity -= 1;
        },

        clearCart: (state) => {
            state.items = [];
        },
    },
});


export const {
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;