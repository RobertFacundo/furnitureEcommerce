import type { Product } from "../data/data";

type SearchBarItemProps = {
    product: Product
}

const SearchBarItem = ({ product }: SearchBarItemProps) => {
    return (
        <div className="flex items-center gap-4 w-full">
            <img
                src={product.images[0]}
                alt={product.name}
                className="w-10 h-10 object-cover rounded"
            />

            <h1 className="font-poppins text-sm truncate">
                {product.name}
            </h1>
        </div>
    )
};

export default SearchBarItem;