import type { Product } from "../data/data";
import ProductOverlay from "./ProductOverlay";

type Props = {
    product: Product;
};

const ProductCard = ({ product }: Props) => {
    return (
        <div className="relative flex flex-col w-[285px] h-[446px] group cursor-pointer">
            <div className="h-[301px] overflow-hidden">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition"
                />
            </div>

            <div className="flex flex-col bg-[#f4f5f7] p-4 gap-3 h-[145px]">
                <h3 className="font-semibold text-[18px]">
                    {product.name}
                </h3>

                <p className="text-[14px] text-gray-500">
                    {product.shortDescription}
                </p>

                <p className="font-semibold text-[16px]">
                    ${product.price}
                </p>
            </div>

            <ProductOverlay product={product}/>
        </div>
    );
};

export default ProductCard;