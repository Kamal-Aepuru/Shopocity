import useProducts from "@/api/useProducts";
import { useParams } from "@tanstack/react-router";
const ProductDetails = () => {
  const { data: products, isLoading } = useProducts();
  const { productId } = useParams({
    from: "/products/productDetails/$productId",
  });
  console.log(productId);
  if (isLoading) return <p>Loading...</p>;
  const product = products?.find((p) => p._id === productId);
  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-6">
      <h1>{product?.name}</h1>
      <p>{product?.description}</p>
    </div>
  );
};

export default ProductDetails;
