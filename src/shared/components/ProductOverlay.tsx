import type { Product } from "../data/data";
import { CiShare2 } from "react-icons/ci";
import { GoArrowSwitch } from "react-icons/go";
import { CiHeart } from "react-icons/ci";

type Props = {
    product: Product;
};

const ProductOverlay = ({ product }: Props) => {
    return (
        <div className="
        absolute inset-0
        flex flex-col items-center justify-center md:gap-4 gap-2
        bg-black/40 backdrop-blur-[2px]
        opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
        transition-all duration-300"
        >

            <button
                onClick={() => console.log(product)}
                className="
                md:w-[202px] md:h-[48px] p-1
                flex items-center justify-center
                bg-white text-[#b88e2f]
                md:text-[16px] text-[11px] font-semibold
                cursor-pointer
                hover:bg-[#f5f5f5] hover:scale-[1.03]
                transition-all duration-300
                "
            >
                Add to cart
            </button>

            <div className="flex gap-4 text-white md:text-[16px] text-[10px]">
                <button className="hover:underline flex flex-row gap-1 items-center cursor-pointer"> <CiShare2 size={16} /> Share</button>
                <button className="hover:underline flex flex-row gap-1 items-center cursor-pointer"> <GoArrowSwitch size={16} />Compare</button>
                <button className="hover:underline flex flex-row gap-1 items-center cursor-pointer"> <CiHeart size={16} />Like</button>
            </div>

        </div>
    );
};

export default ProductOverlay;