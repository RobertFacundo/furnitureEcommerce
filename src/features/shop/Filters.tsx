import { RiLayoutRowLine } from "react-icons/ri";
import { CgLayoutGridSmall } from "react-icons/cg";
import { motion } from 'framer-motion'

type Props = {
    setViewMode: (mode: "grid" | "row") => void;
    viewMode: "grid" | "row";
}

const Filters = ({ setViewMode, viewMode }: Props) => {
    return (
        <motion.div
            className="flex justify-center items-center gap-2 bg-[#F9F1E7] h-[100px]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" as const }}
        >
            <motion.button
                onClick={() => setViewMode("grid")}
                className={`cursor-pointer ${viewMode === 'grid' ? 'text-black' : 'text-zinc-500'} `}
                whileHover={{ scale: 1.1 }}  // Aumenta el tamaño del icono al pasar el mouse
                whileTap={{ scale: 0.95 }}   // Le da un "clic" visual
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <CgLayoutGridSmall size={40} />
            </motion.button>
            <motion.button
                onClick={() => setViewMode("row")}
                className={`cursor-pointer ${viewMode === 'row' ? 'text-black' : 'text-zinc-500'}`}
                whileHover={{ scale: 1.1 }}  // Aumenta el tamaño del icono al pasar el mouse
                whileTap={{ scale: 0.95 }}   // Le da un "clic" visual
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <RiLayoutRowLine size={32} />
            </motion.button>

        </motion.div>
    );
};

export default Filters;