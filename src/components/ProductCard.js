import Image from "next/image";
import Link from "next/link";

// const products = [
//   {
//     id: 1,
//     name: "Organize Basic Set (Walnut)",
//     price: "$149",
//     rating: 5,
//     reviewCount: 38,
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
//     imageAlt: "TODO",
//     href: "others",
//   },
//   {
//     id: 2,
//     name: "Organize Pen Holder",
//     price: "$15",
//     rating: 5,
//     reviewCount: 18,
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg",
//     imageAlt: "TODO",
//     href: "others",
//   },
//   {
//     id: 3,
//     name: "Organize Sticky Note Holder",
//     price: "$15",
//     rating: 5,
//     reviewCount: 14,
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg",
//     imageAlt: "TODO",
//     href: "others",
//   },
//   {
//     id: 4,
//     name: "Organize Phone Holder",
//     price: "$15",
//     rating: 4,
//     reviewCount: 21,
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg",
//     imageAlt: "TODO",
//     href: "others",
//   },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductCard({products}) {

  console.log(products);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products?.map((product) => (
            <div
              key={product._id}
              className="group relative p-4 border-r border-b border-gray-200 sm:p-6">
              <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                <Image
                  src={product.imageSrc}
                  alt="product image"
                  width={250}
                  height={300}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="pt-10 pb-4 text-center">
                <h3 className="text-sm font-medium text-gray-900">
                  <Link href={`/`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
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
                <p className="mt-4 text-base font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
