import { productCard } from "../animations/productCard";
import type { Product } from "../data/data";
import ProductOverlay from "./ProductOverlay";
import { motion } from 'framer-motion'

type Props = {
    product: Product;
    viewMode: "grid" | "row"
};

const ProductCard = ({ product, viewMode }: Props) => {
    return (
        <motion.div
            variants={productCard}
            className={`relative flex  ${viewMode === 'grid' ? "flex-col md:w-[285px] md:h-[446px] w-[200px] h-[280px] mb-5" : "flex-row m-5"} group cursor-pointer`}>
            <div className="md:h-[301px] h-[200px] overflow-hidden">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition"
                />
            </div>

            <div className={
                viewMode === "grid"
                    ? "flex flex-col bg-[#f4f5f7] md:p-4 md:gap-3 md:h-[145px] p-1 gap-1 h-[80px]"
                    : "flex flex-col justify-center items-center pr-5 flex-1 bg-[#f4f5f7] p-4 gap-2"
            }>
                <h3 className="font-semibold md:text-[18px] text-[11px]">
                    {product.name}
                </h3>

                <p className="md:text-[14px] text-[11px] text-gray-500">
                    {product.shortDescription}
                </p>

                <p className="font-semibold md:text-[16px] text-[12px]">
                    ${product.price}
                </p>
            </div>

            <ProductOverlay product={product} />
        </motion.div>
    );
};

export default ProductCard;