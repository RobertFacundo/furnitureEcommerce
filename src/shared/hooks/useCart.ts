import { useAppDispatch } from "../redux/hooks";
import { addToCart, removeFromCart, increaseQty,decreaseQty } from "../redux/slices/cartSlice";
import type { CartItemType } from "../types/cart";

export const useCart = () => {
    const dispatch = useAppDispatch();

    return {
        addItem: (item: CartItemType) => dispatch(addToCart(item)),
        removeItem: (id: string) => dispatch(removeFromCart(id)),
        increase: (id: string) => dispatch(increaseQty(id)),
        decrease: (id: string) => dispatch(decreaseQty(id)),
    };
};