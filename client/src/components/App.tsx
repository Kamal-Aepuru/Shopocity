import { useCategories } from "@/api/useCategories";
import { Link } from "@tanstack/react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const App = () => {
  const { data: categories, isLoading, isError } = useCategories();
  console.log(categories);
  if (isLoading) return <p>Loading..</p>;
  if (isError) return <p>Failed to Load Categories.</p>;
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          {categories?.map((category) => (
            <NavigationMenuItem key={category._id}>
              <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink asChild>
                  <Link
                    to="/products/$category"
                    params={{ category: category.name }}
                  >
                    View {category.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <h1>
        Welcome to Shopocity – discover the latest trends and best deals, all in
        one place!
      </h1>
    </div>
  );
};

export default App;
