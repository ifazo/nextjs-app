import ProductCard from "@/components/ProductList";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();
  // console.log(products);
  return {
    props: {
      products,
    },
  };
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Products = ({ products }) => {
  return (
    <>
      <div className="bg-white">
        {/* Mobile menu */}
        <main className="pb-24">
          <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Products
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-base text-gray-500">
              All products of our store is displayed here. You can filter them
              by category.
            </p>
          </div>

          {/* Filters */}
          {/* <Disclosure
            as="section"
            aria-labelledby="filter-heading"
            className="relative z-10 border-t border-b border-gray-200 grid items-center">
            <h2 id="filter-heading" className="sr-only">
              Filters
            </h2>
            <div className="relative col-start-1 row-start-1 py-4">
              <div className="max-w-7xl mx-auto flex space-x-6 divide-x divide-gray-200 text-sm px-4 sm:px-6 lg:px-8">
                <div>
                  <Disclosure.Button className="group text-gray-700 font-medium flex items-center">
                    <div
                      className="flex-none w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                        />
                      </svg>
                    </div>
                    2 Filters
                  </Disclosure.Button>
                </div>
                <div className="pl-6">
                  <button type="button" className="text-gray-500">
                    Clear all
                  </button>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="border-t border-gray-200 py-10">
              <div className="max-w-7xl mx-auto grid grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 auto-rows-min md:grid-cols-2 md:gap-x-6">
                  <fieldset>
                    <legend className="block font-medium">Price</legend>
                    <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                      {filters.price.map((option, optionIdx) => (
                        <div
                          key={option.value}
                          className="flex items-center text-base sm:text-sm">
                          <input
                            id={`price-${optionIdx}`}
                            name="price[]"
                            defaultValue={option.value}
                            type="checkbox"
                            className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            defaultChecked={option.checked}
                          />
                          <label
                            htmlFor={`price-${optionIdx}`}
                            className="ml-3 min-w-0 flex-1 text-gray-600">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="block font-medium">Color</legend>
                    <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                      {filters.color.map((option, optionIdx) => (
                        <div
                          key={option.value}
                          className="flex items-center text-base sm:text-sm">
                          <input
                            id={`color-${optionIdx}`}
                            name="color[]"
                            defaultValue={option.value}
                            type="checkbox"
                            className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            defaultChecked={option.checked}
                          />
                          <label
                            htmlFor={`color-${optionIdx}`}
                            className="ml-3 min-w-0 flex-1 text-gray-600">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
                <div className="grid grid-cols-1 gap-y-10 auto-rows-min md:grid-cols-2 md:gap-x-6">
                  <fieldset>
                    <legend className="block font-medium">Size</legend>
                    <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                      {filters.size.map((option, optionIdx) => (
                        <div
                          key={option.value}
                          className="flex items-center text-base sm:text-sm">
                          <input
                            id={`size-${optionIdx}`}
                            name="size[]"
                            defaultValue={option.value}
                            type="checkbox"
                            className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            defaultChecked={option.checked}
                          />
                          <label
                            htmlFor={`size-${optionIdx}`}
                            className="ml-3 min-w-0 flex-1 text-gray-600">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="block font-medium">Category</legend>
                    <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                      {filters.category.map((option, optionIdx) => (
                        <div
                          key={option.value}
                          className="flex items-center text-base sm:text-sm">
                          <input
                            id={`category-${optionIdx}`}
                            name="category[]"
                            defaultValue={option.value}
                            type="checkbox"
                            className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            defaultChecked={option.checked}
                          />
                          <label
                            htmlFor={`category-${optionIdx}`}
                            className="ml-3 min-w-0 flex-1 text-gray-600">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
              </div>
            </Disclosure.Panel>
            <div className="col-start-1 row-start-1 py-4">
              <div className="flex justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Menu as="div" className="relative inline-block">
                  <div className="flex">
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Sort
                      <div
                        className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <a
                                href={option.href}
                                className={classNames(
                                  option.current
                                    ? "font-medium text-gray-900"
                                    : "text-gray-500",
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm"
                                )}>
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </Disclosure> */}

          {/* Product grid */}
          <section
            aria-labelledby="products-heading"
            className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative p-4 border-r border-b border-gray-200 sm:p-6">
                  <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                    <Image
                      height={100}
                      width={100}
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="pt-10 pb-4 text-center">
                    <h3 className="text-sm font-medium text-gray-900">
                      <Link href={`/products/${product._id}`}>
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
                      <p className="mt-1 text-sm text-gray-500">
                        {product.reviewCount} reviews
                      </p>
                    </div>
                    <p className="mt-4 text-base font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pagination */}
          <nav
            aria-label="Pagination"
            className="max-w-7xl mx-auto px-4 mt-6 flex justify-between text-sm font-medium text-gray-700 sm:px-6 lg:px-8">
            <div className="min-w-0 flex-1">
              <a
                href="#"
                className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25">
                Previous
              </a>
            </div>
            <div className="hidden space-x-2 sm:flex">
              {/* Current: "border-indigo-600 ring-1 ring-indigo-600", Default: "border-gray-300" */}
              <a
                href="#"
                className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25">
                1
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25">
                2
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 h-10 border border-indigo-600 ring-1 ring-indigo-600 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25">
                3
              </a>
              <span className="inline-flex items-center text-gray-500 px-1.5 h-10">
                ...
              </span>
              <a
                href="#"
                className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25">
                8
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25">
                9
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25">
                10
              </a>
            </div>
            <div className="min-w-0 flex-1 flex justify-end">
              <a
                href="#"
                className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25">
                Next
              </a>
            </div>
          </nav>
        </main>
      </div>
    </>
  );
};

export default Products;
