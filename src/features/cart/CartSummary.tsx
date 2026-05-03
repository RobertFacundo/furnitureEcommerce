interface Props {
    subtotal: number;
    total: number;
}

const CartSummary = ({ subtotal, total }: Props) => {
    return (
        <aside className="border rounded-2xl p-6 h-fit sticky top-24">
            <h2 className="text-xl font-bold mb-6">Cart Total</h2>

            <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                </div>

                <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                </div>

                <hr />

                <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${total}</span>
                </div>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90 transition">
                Checkout
            </button>
        </aside>
    );
};

export default CartSummary;