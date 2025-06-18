import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Category } from "@/types/Category";


export const useCategories = () => {
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:4000/api/categories");
    //   console.log("Response is",response.data)
      return response.data;
    },
  });
};
