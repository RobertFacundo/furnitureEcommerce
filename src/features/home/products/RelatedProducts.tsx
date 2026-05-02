import ProductCard from "../../../shared/components/ProductCard";
import { useProducts } from "../../../shared/hooks/useProducts";

type Props = {
    tags: string[];
    currentId: string;
}

const RelatedProducts = ({ tags, currentId }: Props) => {
    const { data, isLoading, error } = useProducts();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    const related = data?.filter((item) =>
        item.id !== currentId &&
        item.tags?.some((tag) => tags.includes(tag))
    )
        .slice(0, 4);
        
    return (
        <div className="mt-12 pt-15 border border-t border-black/10 ">
            <h2 className="font-poppins text-[36px] font-medium mb-6 text-center">
                Related Products
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {related?.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        viewMode="grid"
                    />
                ))}
            </div>
        </div>
    )
};

export default RelatedProducts;