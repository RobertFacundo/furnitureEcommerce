import type { Product } from "../../../shared/data/data";
import { useState } from "react";
import Rating from "./Rating";
import SizeSelector from "./SizeSelector";
import ColorSelector from "./ColorSelector";
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
    product: Product;
}

const ProductInfo = ({ product }: Props) => {
    const [selectedPicture, setSelectedPicture] = useState(0)
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    const canAddToCart =
        (!product.sizes?.length || selectedSize) &&
        (!product.colors?.length || selectedColor);

    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" as const }}
            className="flex md:flex-row flex-col gap-15 mr-3">
            <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="flex flex-row gap-5 ml-5">
                <div
                    className="flex flex-col gap-6">
                    {product.images.map((image, i) => (
                        <motion.img
                            key={i}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            src={image}
                            onClick={() => setSelectedPicture(i)}
                            className={`
                            w-[80px] h-[80px] object-cover cursor-pointer border
                            ${selectedPicture === i ? "border-black/50" : "border-zinc-200"}
                        `} />
                    ))}
                </div>
                <div className="overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={selectedPicture}
                            src={product.images[selectedPicture]}
                            alt=""
                            initial={{ opacity: 0, scale: 1.03 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35 }}
                            className="max-w-[480px]"
                        />
                    </AnimatePresence>
                </div>

            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.55 }}
                className="flex flex-col gap-2 font-poppins ml-5"
            >
                <h1 className="text-[42px]">{product.name}</h1>
                <Rating rating={product.rating} />
                <p className="font-medium text-[24px] text-[#9F9F9F]">${product.price}</p>
                <p className="font-poppins font-regular text-[13px]">{product.description}</p>

                <SizeSelector sizes={product.sizes} selectedSize={selectedSize} onSelect={setSelectedSize} />
                <ColorSelector colors={product.colors} onSelect={setSelectedColor} selectedColor={selectedColor} />
                <div className="pt-4">
                    <motion.button
                        whileHover={
                            canAddToCart ? { scale: 1.02 } : {}
                        }
                        whileTap={
                            canAddToCart ? { scale: 0.98 } : {}
                        }
                        disabled={!canAddToCart}
                        className={`px-8 py-4 text-sm font-medium transition
            ${canAddToCart
                                ? "bg-[#F9F1E7] text-black hover:opacity-90 cursor-pointer"
                                : "bg-zinc-300 text-zinc-500 cursor-not-allowed"
                            }`}
                    >
                        Add to Cart
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    )
};

export default ProductInfo;