import { RiLayoutRowLine } from "react-icons/ri";
import { CgLayoutGridSmall } from "react-icons/cg";
import { RxFilter } from "react-icons/rx";

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from "react";

type Props = {
    setViewMode: (mode: "grid" | "row") => void;
    viewMode: "grid" | "row";

    category: string;
    setCategory: (value: string) => void;

    maxPrice: number;
    setMaxPrice: (value: number) => void;
}

const Filters = ({ setViewMode, viewMode, category, setCategory, maxPrice, setMaxPrice }: Props) => {
    const [openSelect, setOpenSelect] = useState(false)
    return (
        <motion.div
            className="flex justify-center items-center gap-8 bg-[#F9F1E7] h-[100px]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" as const }}
        >
            <motion.button
                onClick={() => setOpenSelect(!openSelect)}
                className="cursor-pointer p-2 rounded-xl hover:bg-white/90"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <motion.div
                    animate={{ rotate: openSelect ? 180 : 0 }}
                    transition={{ duration: 0.35 }}
                >
                    <RxFilter size={34} />
                </motion.div>
            </motion.button>

            <AnimatePresence mode="wait">
                {openSelect && (
                    <motion.div
                        layout
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.35 }}
                        className="flex items-center gap-5 overflow-hidden"
                    >

                        {/* CATEGORY */}
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="
                                border border-zinc-300
                                bg-white
                                px-4 py-2
                                rounded-xl
                                cursor-pointer
                                outline-none
                                font-medium
                                font-poppins
                                
                            "
                        >
                            <option value="All">All</option>
                            <option value="Bedroom">Bedroom</option>
                            <option value="Living">Living Room</option>
                            <option value="Dining">Dining Room</option>
                        </select>


                        {/* PRICE */}
                        <div className="flex items-center gap-3">
                            <span className="font-medium text-zinc-700 min-w-[60px]">
                                ${maxPrice}
                            </span>

                            <input
                                type="range"
                                min="0"
                                max="1000"
                                step="50"
                                value={maxPrice}
                                onChange={(e) =>
                                    setMaxPrice(Number(e.target.value))
                                }
                                className="cursor-pointer"
                            />
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex items-center gap-1 bg-white rounded-2xl px-2 py-1 shadow-sm">

                <motion.button
                    onClick={() => setViewMode("grid")}
                    className={`
                        p-2 rounded-xl cursor-pointer
                        ${viewMode === "grid"
                            ? "bg-[#f1e6d6] text-black"
                            : "text-zinc-500"}
                    `}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    <CgLayoutGridSmall size={34} />
                </motion.button>

                <motion.button
                    onClick={() => setViewMode("row")}
                    className={`
                        p-2 rounded-xl cursor-pointer
                        ${viewMode === "row"
                            ? "bg-[#f1e6d6] text-black"
                            : "text-zinc-500"}
                    `}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    <RiLayoutRowLine size={28} />
                </motion.button>

            </div>


        </motion.div>
    );
};

export default Filters;