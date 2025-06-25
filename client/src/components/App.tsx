import { useCategories } from "@/api/useCategories";
import { Link } from "@tanstack/react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const App = () => {
  const { data: categories, isLoading, isError } = useCategories();

  if (isLoading) return <p>Loading..</p>;
  if (isError) return <p>Failed to Load Categories.</p>;

  return (
    <div className="p-4">
      <header>
        <nav>
          <NavigationMenu>
            <NavigationMenuList>
              {categories?.map((category) => (
                <NavigationMenuItem key={category._id}>
                  <NavigationMenuTrigger className="capitalize">
                    {category.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-48 bg-white border rounded shadow-md p-2">
                    <ul>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/products/$categoryId"
                            params={{ categoryId: category.name }}
                            className="block px-3 py-2 hover:bg-gray-100 rounded text-sm"
                          >
                            View {category.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </header>

      <h1 className="mt-6 text-2xl font-bold">
        Welcome to Shopocity – discover the latest trends and best deals, all in
        one place!
      </h1>
    </div>
  );
};

export default App;
