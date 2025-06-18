import { createFileRoute } from '@tanstack/react-router'
import ProductDetails from "../../../components/ProductDetails"

export const Route = createFileRoute('/products/productDetails/$productId')({
  component: ProductDetails,
})


