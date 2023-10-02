import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Machined Pen",
    color: "Black",
    price: "$35",
    href: "#",
    image:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
    availableColors: [
      { name: "Black", colorBg: "#111827" },
      { name: "Brass", colorBg: "#FDE68A" },
      { name: "Chrome", colorBg: "#E5E7EB" },
    ],
  },
  // More products...
];

export default function ProductList({data}) {
  console.log(data.products);
  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:px-8">
        <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Trending products
          </h2>
          <Link
            href="#"
            className="hidden sm:block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            See everything<span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-8 relative">
          <div className="relative w-full pb-6 -mb-6 overflow-x-auto">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8">
              {data?.products.map((product) => (
                <li
                  key={product._id}
                  className="w-64 inline-flex flex-col text-center lg:w-auto">
                  <div className="group relative">
                    <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                      <Image
                        height={200}
                        width={200}
                        src={product.image}
                        alt="Product"
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-6">
                      <h3 className="mt-1 font-semibold text-gray-900">
                        <Link
                          href={`products/${product._id}`}
                        >
                          <span className="absolute inset-0" />
                          {product.name}
                        </Link>
                      </h3>
                      <div className="m-3 flex justify-between">
                        <p className="font-medium text-gray-700">
                          {product.category}
                        </p>
                        <p className="font-medium text-gray-700">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <h4 className="sr-only">Available colors</h4>
                  <ul
                    role="list"
                    className="mt-auto pt-6 flex items-center justify-center space-x-3">
                    {product.availableColors.map((color) => (
                      <li
                        key={color.name}
                        className="w-4 h-4 rounded-full border border-black border-opacity-10"
                        style={{ backgroundColor: color.colorBg }}>
                        <span className="sr-only">{color.name}</span>
                      </li>
                    ))}
                  </ul> */}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex px-4 sm:hidden">
          <a
            href="#"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            See everything<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
