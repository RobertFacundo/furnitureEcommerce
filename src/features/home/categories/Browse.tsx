import { useCategories } from "../../../shared/hooks/useCategories";
import { Link } from "react-router-dom";

const Browse = () => {
    const { data, isLoading, error } = useCategories();

    if (isLoading) return <p>loading categories</p>
    if (error) return <p>Error loading categories</p>

    return (
        <section className="flex flex-col gap-10 py-16 font-poppins ">
            <div className="text-center">
                <h1 className="text-[32px] font-bold">
                    Browse The Range
                </h1>
                <h3 className="font-light text-[20px] text-[#666666]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            </div>
            <div className="grid grid-cols-3 gap-5 max-w-[1183px] mx-auto">
                {data?.map(category => (
                    <Link
                        to={`/shop/${category.name}`}
                        className="flex flex-col h-[480px] items-center gap-4 cursor-pointer hover:scale-[1.02] transition-all duration-500 ease"
                        key={category.name}
                    >
                        <img
                            src={category.image}
                            alt={category.name}
                            className="h-[480px] w-full object-cover rounded-[10px]"
                        />
                        <h1
                            className="font-semibold text-[24px] hover-link cursor-pointer"
                        >
                            {category.name}
                        </h1>
                    </Link>
                ))}
            </div>
        </section>
    )
};


export default Browse;