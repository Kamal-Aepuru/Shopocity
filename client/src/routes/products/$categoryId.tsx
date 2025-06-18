import ProductsByCategory from "@/components/ProductsByCategory";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/products/$categoryId")({
  component: ProductsByCategory,
});
