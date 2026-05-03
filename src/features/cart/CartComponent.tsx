import CartItems from "./CartItems";
import CartSummary from "./CartSummary";
import type { CartType } from "../../shared/types/cart";

const CartComponent = () => {
    const cart: CartType = {
        items: [
            {
                id: 1,
                name: "Nike Air Max",
                price: 120,
                quantity: 2,
                image: "/img/shoe1.png",
            },
            {
                id: 2,
                name: "Adidas Forum",
                price: 90,
                quantity: 1,
                image: "/img/shoe2.png",
            },
        ],
    };

    const subtotal = cart.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <section className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <CartItems items={cart.items} />
                </div>

                <CartSummary subtotal={subtotal} total={subtotal} />
            </div>
        </section>
    );
};

export default CartComponent;