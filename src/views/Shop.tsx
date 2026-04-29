import { useState } from "react";
import Filters from "../features/shop/Filters";
import Header from "../shared/components/Header";
import Products from "../features/shop/Products";
import useScrollToTop from "../shared/hooks/useScrollToTop";

const Shop = () => {
    const [viewMode, setViewMode] = useState<"grid" | "row">("grid");

    useScrollToTop();

    return (
        <div className="flex flex-col w-full">
            <Header title={'Shop'} />
            <Filters setViewMode={setViewMode} viewMode={viewMode} />
            <Products viewMode={viewMode} />
        </div>
    )
};

export default Shop;