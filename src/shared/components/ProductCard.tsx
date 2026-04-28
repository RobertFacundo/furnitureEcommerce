import { productCard } from "../animations/productCard";
import type { Product } from "../data/data";
import ProductOverlay from "./ProductOverlay";
import {motion} from 'framer-motion'

type Props = {
    product: Product;
};

const ProductCard = ({ product }: Props) => {
    return (
        <motion.div 
        variants={productCard}
        className="relative flex flex-col md:w-[285px] md:h-[446px] w-[200px] h-[280px] group cursor-pointer">
            <div className="md:h-[301px] h-[200px] overflow-hidden">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition"
                />
            </div>

            <div className="flex flex-col bg-[#f4f5f7] md:p-4 md:gap-3 md:h-[145px] p-1 gap-1 h-[80px]">
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

            <ProductOverlay product={product}/>
        </motion.div>
    );
};

export default ProductCard;