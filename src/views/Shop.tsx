import { useState, useMemo } from "react";
import Filters from "../features/shop/Filters";
import Header from "../shared/components/Header";
import Products from "../features/shop/Products";
import useScrollToTop from "../shared/hooks/useScrollToTop";
import Banner from "../shared/components/Banner";
import { useProducts } from "../shared/hooks/useProducts";

const Shop = () => {
    const { data, isLoading, error } = useProducts();

    const [viewMode, setViewMode] = useState<"grid" | "row">("grid");
    const [category, setCategory] = useState("All");
    const [maxPrice, setMaxPrice] = useState(5000);

    useScrollToTop();

    const filteredProducts = useMemo(() => {
        if (!data) return [];

        return data.filter((product) => {
            const matchCategory = category === "All" || product.category === category;
            const matchPrice = product.price <= maxPrice;

            return matchCategory && matchPrice;
        });
    }, [data, category, maxPrice])

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    return (
        <div className="flex flex-col w-full">
            <Header title={'Shop'} />
            <Filters
                setViewMode={setViewMode}
                viewMode={viewMode}
                category={category}
                setCategory={setCategory}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
            />
            <Products viewMode={viewMode} products={filteredProducts} />
            <Banner />
        </div>
    )
};

export default Shop;