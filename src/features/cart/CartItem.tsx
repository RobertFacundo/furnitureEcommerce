import type { CartItemType } from "../../shared/types/cart";

interface Props {
    item: CartItemType;
}

const CartItem = ({ item }: Props) => {
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

            <p>Qty: {item.quantity}</p>

            <p className="font-bold">${subtotal}</p>
        </article>
    );
};

export default CartItem;