import { motion } from 'framer-motion';

type Props = {
    colors?: string[];
    selectedColor: string | null;
    onSelect: (color: string) => void;
}

const ColorSelector = ({ colors, selectedColor, onSelect }: Props) => {
    return (
        <div>
            {colors?.length ? (
                <div className="flex flex-col gap-3 pt-10">
                    <h3 className="text-sm text-zinc-500">Colors</h3>

                    <div className="flex gap-3">
                        {colors.map((color, i) => (
                            <motion.button
                                key={color}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: i * 0.06,
                                    duration: 0.25,
                                }}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => onSelect(color)}
                                style={{ backgroundColor: color }}
                                className={`w-8 h-8 rounded-full border-2 transition cursor-pointer
            ${selectedColor === color
                                        ? "border-black/30 scale-110"
                                        : "border-zinc-300/30"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    )
};

export default ColorSelector;