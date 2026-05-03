import CartItem from "./CartItem";
import type { CartItemType } from "../../shared/types/cart";

interface Props {
    items: CartItemType[];
}

const CartItems = ({ items }: Props) => {
    return (
        <div className="space-y-4">
            {items.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default CartItems;