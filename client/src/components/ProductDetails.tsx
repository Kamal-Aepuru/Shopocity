import useProducts from "@/api/useProducts";
import { useParams } from "@tanstack/react-router";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProductDetails = () => {
  const { data: products, isLoading } = useProducts();
  const { productId } = useParams({
    from: "/products/productDetails/$productId",
  });
  if (isLoading) return <p>Loading...</p>;
  const product = products?.find((p) => p._id === productId);
  if (!product) return <p>Product not found</p>;
  console.log(product);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product?.description}</CardDescription>
          <CardAction>
            <p>Price: {product?.price}</p>
          </CardAction>
        </CardHeader>
        <CardContent>
          {product && (
            <ul>
              <li>{product?.name}</li>
              <li>{product?.description}</li>
              <li>Rating : {product?.rating}</li>
              <h2>Features</h2>
              {product.features.map((p) => (
                <li>{p}</li>
              ))}
            </ul>
          )}
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
};

export default ProductDetails;
