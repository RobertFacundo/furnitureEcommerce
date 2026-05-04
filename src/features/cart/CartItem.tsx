import type { CartItemType } from "../../shared/types/cart";
import { useCart } from "../../shared/hooks/useCart";

interface Props {
    item: CartItemType;
}

const CartItem = ({ item }: Props) => {
    const { increase, decrease, removeItem } = useCart();
    const subtotal = item.price * item.quantity;

    return (
        <article className="flex items-center gap-4 border rounded-xl p-4">
            <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
            />

            <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">${item.price}</p>
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={() => decrease(item.id)}
                    className="px-2 border rounded cursor-pointer"
                >
                    -
                </button>

                <span>{item.quantity}</span>

                <button
                    onClick={() => increase(item.id)}
                    className="px-2 border rounded cursor-pointer"
                >
                    +
                </button>
            </div>

            <p className="font-bold">${subtotal}</p>
            <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 text-sm cursor-pointer"
            >
                Remove
            </button>
        </article>
    );
};

export default CartItem;