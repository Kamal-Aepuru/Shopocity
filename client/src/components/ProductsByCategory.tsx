import useProducts from "@/api/useProducts";
import { useParams, Link } from "@tanstack/react-router";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const ProductsByCategory = () => {
  const {categoryId} = useParams({ from: "/products/$categoryId/" });
  const { data: products } = useProducts();

  const filteredProductsByCategory = products?.filter( 
    (product) => product.category === categoryId
  );

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <SidebarProvider>
      <div className="flex">
        <AppSidebar categoryId={categoryId}/>
        <main className="flex-1 p-4">
          <SidebarTrigger className="mb-4" />
          <h1 className="text-2xl font-bold mb-4">
            {categoryId} Section
          </h1>
          <ul className="grid grid-cols-4 gap-4">
            {filteredProductsByCategory?.map((product) => (
              <div key={product._id}>
                <Card>
                  <CardContent>
                    <Link
                      to="/products/productDetails/$productId"
                      params={{ productId: product._id }}
                      className="text-lg font-semibold"
                    >
                      {product.name}
                    </Link>
                    <p>{product.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center mt-2">
                    <Button variant="outline">Add to Cart</Button>
                    <div className="h-4" />
                    <Button variant="outline">Add to Wishlist</Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </ul>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ProductsByCategory;
