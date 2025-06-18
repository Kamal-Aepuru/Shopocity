import useProducts from "@/api/useProducts";
import { useParams, Link } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProductsByCategory = () => {
  const response = useParams({from:'/products/$categoryId'});

  const { data: products } = useProducts();
  const filteredProductsByCategory = products?.filter(
    (product) => product.category === response.categoryId
  );
console.log(response,"cat")
console.log(filteredProductsByCategory,"filt")

  return (
    <>
      <h1>{response.categoryId} Section</h1>
      <ul>
        {filteredProductsByCategory?.map((product) => (
          <div>
            <Card key={product._id}>
              <CardHeader>
                <CardTitle>{response.categoryId}</CardTitle>
                <CardDescription>Tap Into Trending Categories</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  to={"/products/productDetails/$productId"}
                  params={{ productId: product._id }}
                >
                  {product.name}
                </Link>

                <p>{product.name}</p>
              </CardContent>
              <CardFooter>
                <p>{product.description}</p>
              </CardFooter>
            </Card>
          </div>
        ))}
      </ul>
    </>
  );
};

export default ProductsByCategory;
