import type { Product } from "../../data/data";
import { Link } from "react-router-dom";
import { slugify } from "../../utils/slugify";

type SearchBarItemProps = {
    product: Product
}

const SearchBarItem = ({ product }: SearchBarItemProps) => {
    return (
        <Link  to={`/shop/${slugify(product.name)}`} className="flex items-center gap-4 w-full">
            <img
                src={product.images[0]}
                alt={product.name}
                className="w-10 h-10 object-cover rounded"
            />

            <h1 className="font-poppins text-sm truncate">
                {product.name}
            </h1>
        </Link>
    )
};

export default SearchBarItem;