import { useProducts } from "../../hooks/useProducts";
import { Command, CommandInput, CommandList, CommandItem, CommandEmpty } from "cmdk";
import { useState, useRef} from "react";
import SearchBarItem from "./SearchBarItem";
import { AnimatePresence, motion } from 'framer-motion';
import { searchItem } from "../../animations/searchNavBar";
import { IoClose } from "react-icons/io5";
import { useClickOutside } from "../../hooks/useClickOutside";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const { data } = useProducts();

    const wrapperRef = useRef<HTMLDivElement>(null);

    const filteredProducts = data?.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    useClickOutside(wrapperRef, () => setQuery(""));


    return (
        <div ref={wrapperRef}>
            <Command className="relative md:w-[300px] w-[200px] border rounded-lg p-2">
                <div className="flex items-center gap-2">
                    <CommandInput
                        value={query}
                        onValueChange={setQuery}
                        placeholder="Search products..."
                        className="w-full outline-none"
                    />
                    {query && (
                        <button
                            onClick={() => setQuery("")}
                            className="text-gray-400 hover:text-black transition cursor-pointer"
                        >
                            <IoClose size={18} />
                        </button>
                    )}
                </div>

                <AnimatePresence>
                    {query.length > 2 && (
                        <CommandList className="absolute top-full left-0 w-full bg-white shadow rounded mt-2 z-10">

                            <CommandEmpty className="p-5 font-poppins">
                                No products found
                            </CommandEmpty>

                            {filteredProducts?.map((product, index) => (
                                <CommandItem
                                    key={product.id}
                                    value={product.name}
                                    onSelect={() => setQuery(product.name)}
                                    asChild

                                >
                                    <motion.div
                                        variants={searchItem}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        transition={{ delay: index * 0.04 }}
                                        className="
                                        p-2 cursor-pointer rounded-md transition
        
                                        hover:bg-gray-100
        
                                        data-[selected=true]:bg-gray-100
                                        data-[selected=true]:text-black
                                    "
                                    >
                                        <SearchBarItem product={product} />
                                    </motion.div>
                                </CommandItem>
                            ))}

                        </CommandList>
                    )}
                </AnimatePresence>
            </Command>
        </div>
    )
};

export default SearchBar;