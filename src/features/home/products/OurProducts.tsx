import { useProducts } from "../../../shared/hooks/useProducts"
import ProductCard from "../../../shared/components/ProductCard";
import { Link } from "react-router-dom";

const OurProducts = () => {
    const { data, isLoading, error } = useProducts();

    if (isLoading) return <p>Loading products...</p>
    if (error) return <p>Error laoding products</p>
    return (
        <div className="flex flex-col font-poppins mb-10">
            <h1 className="font-bold text-[40px] text-center py-5">Our Products</h1>
            <div className="grid grid-cols-4 gap-12 mx-auto">
                {data?.slice(0, 4).map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Link
                to="/shop"
                className="
                mx-auto mt-10
                w-[245px] h-[48px]
                flex items-center justify-center
                border border-[#b88e2f]
                text-[#b88e2f] font-semibold text-[16px]
                hover:bg-[#b88e2f] hover:text-white
                transition-all duration-400
            "
            >
                Show more
            </Link>
        </div>
    )
};

export default OurProducts;