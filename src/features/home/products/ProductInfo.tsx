import type { Product } from "../../../shared/data/data";
import { useState } from "react";

type Props = {
    product: Product;
}

const ProductInfo = ({ product }: Props) => {
    const [selectedPicture, setSelectedPicture] = useState(0)
    return (
        <div className="flex flex-row">
            <div className="flex flex-row">
                <div className="flex flex-col gap-3">
                    {product.images.map((image, i) => (
                        <img key={i}
                            src={image}
                            onClick={() => setSelectedPicture(i)}
                            className={`
                            w-[80px] h-[80px] object-cover rounded-lg cursor-pointer border
                            ${selectedPicture === i ? "border-black/50" : "border-zinc-200"}
                        `} />
                    ))}
                </div>
                <img src={product.images[selectedPicture]} alt="" className="w-[480px]" />

            </div>
            <div className="flex flex-col">
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                <p>{product.rating}</p>
                <div>
                    <h3>Size</h3>
                    <div className="flex flex-row">
                        {product.sizes?.map((size) => (
                            <span>{size}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <h3>Colors</h3>
                    <div className="flex flex-row">
                        {product.colors?.map((color) => (
                            <span className={`bg-[${color}] w-[10px]`}></span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-row">
                    <button>Add to cart</button>
                </div>
                <div className="border-t border">
                    Tags: {product.tags?.map(tag => <span>{tag}</span>)}
                </div>
            </div>
        </div>
    )
};

export default ProductInfo;