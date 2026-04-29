import { useProducts } from "../../../shared/hooks/useProducts"
import ProductCard from "../../../shared/components/ProductCard";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import { button, section, title } from "../../../shared/animations/productSection";

const OurProducts = () => {
    const { data, isLoading, error } = useProducts();

    if (isLoading) return <p>Loading products...</p>
    if (error) return <p>Error laoding products</p>
    return (
        <motion.section
            initial='hidden'
            whileInView='show'
            viewport={{ once:true, amount: 0.2 }}
            variants={section}
            className="flex flex-col font-poppins mb-10">
            <motion.h1
                variants={title}
                className="font-bold text-[40px] text-center py-5">
                Our Products
            </motion.h1>
            <motion.div variants={section} className="grid md:grid-cols-4 grid-cols-2 gap-12 mx-auto">
                {data?.slice(0, 4).map(product => (
                    <ProductCard key={product.id} product={product} viewMode="grid" />
                ))}
            </motion.div>
            <motion.div variants={button}>
                <Link
                    to="/shop"
                    className="
                    mx-auto mt-10
                    w-[245px] h-[48px]
                    flex items-center justify-center
                    border border-[#b88e2f]
                    text-[#b88e2f] font-semibold text-[16px]
                    hover:bg-[#b88e2f] hover:text-white
                    transition-all duration-400
                "
                >
                    Show more
                </Link>
            </motion.div>
        </motion.section>
    )
};

export default OurProducts;