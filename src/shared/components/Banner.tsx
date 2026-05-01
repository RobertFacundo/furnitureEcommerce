import { motion } from "framer-motion";
import { BannerItems } from "../data/banner";
import BannerItem from "./BannerItem";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Banner = () => {
    return (
        <motion.div
            className="flex md:flex-row flex-col gap-10 md:items-center items-start md:justify-around p-3  md:h-[270px] h-[460px] bg-[#FAF3EA]"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
        >
            {BannerItems.map((itemData) => (
                <motion.div
                    key={itemData.title}
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    <BannerItem item={itemData} />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Banner;