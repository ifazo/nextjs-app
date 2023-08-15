import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import RootLayout from "@/layouts/RootLayout";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps = async () => {
  const productData = await fetch("http://localhost:5000/api/products");
  const products = await productData.json();
  const categoryData = await fetch("http://localhost:5000/api/categories");
  const categories = await categoryData.json();

  return {
    props: {
      products,
      categories,
    },
  };
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home({ products, categories }) {
  // console.log(products);
  return (
    <main>
      {/* Product list start hare */}
      <div className="bg-white">
        <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:px-8">
          <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Trending products
            </h2>
            <Link
              href="/products"
              className="hidden sm:block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              See all products<span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>

          <div className="mt-8 relative">
            <div className="relative w-full pb-6 -mb-6 overflow-x-auto">
              <ul
                role="list"
                className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8">
                {products?.map((product) => (
                  <li
                    key={product._id}
                    className="w-64 inline-flex flex-col text-center lg:w-auto">
                    <div className="group relative">
                      <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                        <Image
                          height={100}
                          width={100}
                          src={product.imageSrc}
                          alt={"product"}
                          className="w-full h-full object-center object-cover group-hover:opacity-75"
                        />
                      </div>
                      <div className="mt-6">
                        <p className="text-sm text-gray-500">{product.color}</p>
                        <h3 className="mt-1 font-semibold text-gray-900">
                          <Link href={`/products/${product._id}`}>
                            <span className="absolute inset-0" />
                            {product.name}
                          </Link>
                        </h3>
                        <p className="mt-1 text-gray-900">{product.price}</p>
                      </div>
                    </div>
                    {/* Star reviews */}
                    <div className="mt-3 flex flex-col items-center">
                      <p className="sr-only">{product.rating} out of 5 stars</p>
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <svg
                            key={rating}
                            className={classNames(
                              product.rating > rating
                                ? "text-yellow-400"
                                : "text-gray-200",
                              "flex-shrink-0 h-5 w-5"
                            )}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                      <p className="mt-1 text-sm text-gray-500">13 reviews</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex px-4 sm:hidden">
            <Link
              href="/products"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              See everything<span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
      {/* Product list end here */}
      <CategoryCard categories={categories} />
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
