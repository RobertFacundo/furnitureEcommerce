import ProductCard from "../../shared/components/ProductCard";
import type { Product } from "../../shared/data/data";
// import { useProducts } from "../../shared/hooks/useProducts";
import { motion } from 'framer-motion'

type Props = {
    viewMode: "grid" | "row";
    products: Product[] | undefined;
}

const Products = ({ viewMode, products }: Props) => {

    return (
        <motion.div
            className={viewMode === 'grid'
                ? "grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-16 mb-6 p-16 mx-auto pl-8"
                : "flex flex-col gap-4 mt-2"
            }
            initial="hidden"
            animate="show"
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.05,
                    },
                },
            }}
            transition={{
                layout: {
                    duration: 0.02,
                    type: "spring",
                    stiffness: 120,
                    damping: 18
                }
            }}
            layout
        >
            {products?.map((product) => (
                <motion.div
                    key={product.id}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 },
                    }}
                    transition={{
                        type: "spring", stiffness: 300, damping: 20, layout: {
                            duration: 0.05
                        }
                    }}
                    layout
                >
                    <ProductCard key={product.id} product={product} viewMode={viewMode} />
                </motion.div>
            ))}
        </motion.div>
    )
};

export default Products;