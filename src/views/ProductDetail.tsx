import ProductInfo from "../features/home/products/ProductInfo";
import { useParams } from "react-router-dom";
import { useProducts } from "../shared/hooks/useProducts";
import { slugify } from "../shared/utils/slugify";
import RelatedProducts from "../features/home/products/RelatedProducts";
import useScrollToTop from "../shared/hooks/useScrollToTop";
import Header from "../shared/components/Header";

const ProductDetail = () => {
    const { slug } = useParams();
    const { data, isLoading, error } = useProducts();

    useScrollToTop();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading product...</p>;

    const product = data?.find(
        (item) => slugify(item.name) === slug
    )

    if (!product) return <p>Product not found</p>

    return (
        <div className="flex flex-col ">
            <Header title="Product Detail"/>
            <ProductInfo product={product} />
            <RelatedProducts tags={product.tags} currentId={product.id} />
        </div>
    )
};

export default ProductDetail;