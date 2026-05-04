import CartItems from "./CartItems";
import CartSummary from "./CartSummary";
import { useAppSelector } from "../../shared/redux/hooks";

const CartComponent = () => {
    const { items } = useAppSelector((state) => state.cart)

    const subtotal = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    if (items.length === 0) {
        return (
            <section className="text-center py-20">
                <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
                <p className="text-gray-500">Looks like you haven't added anything yet</p>
            </section>
        );
    }

    return (
        <section className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <CartItems items={items} />
                </div>

                <CartSummary subtotal={subtotal} total={subtotal} />
            </div>
        </section>
    );
};

export default CartComponent;