import {useQuery} from "@tanstack/react-query"
import axios from "axios"
import type { Products } from "@/types/Products";

const useProducts = ()=>{
    return useQuery<Products[]>({
        queryKey:["products"],
        queryFn: async ()=>{
          const response = await axios.get("http://localhost:4000/api/products")
          return response.data;
        }
    })
}
export default useProducts;