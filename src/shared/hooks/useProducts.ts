import { useQuery } from "@tanstack/react-query";
import { products } from "../data/data";
import type { Product } from "../data/data";

export const useProducts = () => {
    return useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: async () => {
            return products;
        }
    })
}