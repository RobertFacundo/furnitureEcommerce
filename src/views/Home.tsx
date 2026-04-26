import Browse from "../features/home/categories/Browse";
import Hero from "../features/home/hero/Hero";
import OurProducts from "../features/home/products/OurProducts";
import Inspirations from "../features/home/inspirations/Inspirations";
import Share from "../features/home/share/Share";

const Home = () => {
    return (
        <>
            <Hero />
            <Browse />
            <OurProducts />
            <Inspirations />
            <Share />
        </>
    )
};

export default Home;