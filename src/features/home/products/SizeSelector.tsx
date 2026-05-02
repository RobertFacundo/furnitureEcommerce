import { motion } from 'framer-motion';

type Props = {
    sizes?: string[];
    selectedSize: string | null;
    onSelect: (size: string) => void;
}

const SizeSelector = ({ sizes, selectedSize, onSelect }: Props) => {
    if (!sizes?.length) return null;
    return (
        <>
            {
                sizes?.length ? (
                    <div className="flex flex-col gap-3 border-t border-black/30 pt-10" >
                        <h3 className="text-sm text-zinc-500">Size</h3>

                        <div className="flex gap-3 flex-wrap">
                            {sizes.map((size, i) => (
                                <motion.button
                                    key={size}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: i * 0.06,
                                        duration: 0.3,
                                    }}
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => onSelect(size)}
                                    className={`px-4 py-2 border text-sm transition cursor-pointer
            ${selectedSize === size
                                            ? "bg-[#F9F1E7] text-black border-black/30"
                                            : "border-zinc-300/30 hover:border-black"
                                        }`}
                                >
                                    {size}
                                </motion.button>
                            ))}
                        </div>
                    </div >
                ) : null
            }
        </>
    )
};

export default SizeSelector;