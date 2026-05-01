import ProductInfo from "../features/home/products/ProductInfo";
import { useParams } from "react-router-dom";
import { useProducts } from "../shared/hooks/useProducts";
import { slugify } from "../shared/utils/slugify";

const ProductDetail = () => {
    const { slug } = useParams();
    const { data, isLoading, error } = useProducts();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading product...</p>;

    const product = data?.find(
        (item) => slugify(item.name) === slug
    )

    if (!product) return <p>Product not found</p>
    
    return (
        <div className="flex flex-col">
            <ProductInfo product={product} />
        </div>
    )
};

export default ProductDetail;