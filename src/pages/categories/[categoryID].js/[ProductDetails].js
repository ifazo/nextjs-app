import Image from "next/image";

const breadcrumbs = [
    { id: 1, name: "Women", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ]

const product = {
  id: 1,
  name: "Basic Tee",
  price: "$35",
  rating: 3.9,
  reviewCount: 512,
  href: "#",
  image:
    "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
  description:
    "The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.",
  features: [
    "Only the best materials",
    "Ethically and locally made",
    "Pre-washed and pre-shrunk",
    "Machine wash cold with similar colors",
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  return (
    <div className="bg-white">
      <div className="pt-6 pb-6 sm:pb-12">
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol role="list" className="flex items-center space-x-4">
            {breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-4 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    viewBox="0 0 6 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5 w-auto text-gray-300">
                    <path
                      d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <div className="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
            <div className="lg:col-start-7 lg:col-span-6">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">
                  {product.name}
                </h1>
                <p className="text-xl font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
              {/* Reviews */}
              <div className="mt-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <p className="text-sm font-medium text-gray-700">
                    {product.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>

                  <div className="ml-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <svg
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
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
                  <div
                    aria-hidden="true"
                    className="ml-4 text-sm text-gray-300">
                    ·
                  </div>
                  <div className="ml-4 flex">
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      See all {product.reviewCount} reviews
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-6 lg:row-start-1 lg:row-span-3">
              <h2 className="sr-only">Images</h2>

              <div className="aspect-h-1 aspect-w-1 grid grid-cols-1 lg:gap-8">
                <Image
                  key={product.id}
                  src={product.image}
                  alt="Product"
                  width={300}
                  height={480}
                  className="rounded-lg lg:col-span-2 lg:row-span-2"
                />
              </div>
            </div>

            <div className="mt-2 lg:col-span-6">
              <form>
                {/* Status */}
                <div className="mt-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-900">
                      Category
                    </h2>
                    <h2 className="text-sm font-medium text-gray-900">status</h2>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Add to cart
                </button>
              </form>

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Description: <br />
                  <div className="mt-2 prose prose-sm text-gray-500">
                    {product.description}
                  </div>
                </h2>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-sm font-medium text-gray-900">
                  Key Features
                </h2>

                <div className="mt-4 prose prose-sm text-gray-500">
                  <ul role="list">
                    {product.features.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
