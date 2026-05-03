import CartComponent from "../features/cart/CartComponent";
import useScrollToTop from "../shared/hooks/useScrollToTop";
import Header from "../shared/components/Header";
import Banner from "../shared/components/Banner";

const Cart = () => {
    useScrollToTop();
    return (
        <>
            <Header title="Cart" />
            <CartComponent />
            <Banner />
        </>
    )
};

export default Cart;