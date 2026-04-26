import { useQuery } from "@tanstack/react-query";
import { categories } from "../data/data";
import type { Category } from "../data/data";

export const useCategories = () => {
    return useQuery<Category[]>({
        queryKey: ["categories"],
        queryFn: async () => {
            return categories;
        }
    })
}