import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  clearProducts,
  removeProduct,
} from "@/store/features/product/productSlice";
import logo from "public/favicon.ico";

export async function getStaticProps() {
  try {
    const res = await fetch(`https://next-js-ifaz.vercel.app/api/categories`);
    const categories = await res.json();
    return {
      props: {
        categories,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        categories: [],
      },
    };
  }
}

export default function Builder({ categories }) {

  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleRemoveProduct = (product) => {
    dispatch(removeProduct(product));
  };

  const handleComplete = () => {
    dispatch(clearProducts());
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Builder products
        </h2>
        <div className="mt-8 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Remove</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {categories?.map((category) => {
                      const product = products.find(
                        (product) => product.category === category.name,
                      );
                      return (
                        <tr key={category._id}>
                          <>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                              <div className="flex items-center">
                                <div className="h-10 w-10 flex-shrink-0">
                                  <Image
                                    width={40}
                                    height={40}
                                    className="h-10 w-10 rounded-sm"
                                    src={product ? product.image : logo}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="font-medium text-gray-900">
                                    {product
                                      ? product.name
                                      : "No product selected"}
                                  </div>
                                  <div className="text-gray-500">
                                    {product ? product.rating : "No rating"}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <div className="font-medium text-gray-900">
                                {category.name}
                              </div>
                              <div className="font-normal text-gray-500">
                                Required
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              ${product ? product.price : "--"}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                {product ? product.status : "No status"}
                              </span>
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              {product ? (
                                <button
                                  onClick={() => handleRemoveProduct(product)}
                                  className="text-red-600 hover:text-red-900"
                                >
                                  Remove
                                </button>
                              ) : (
                                <Link
                                  href={`/builder/${category.name}`}
                                  className="text-indigo-600 hover:text-indigo-900"
                                >
                                  Select
                                </Link>
                              )}
                            </td>
                          </>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Complete !!</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the components you have selected for your build.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            {products.length >= 6 ? (
              <button
                type="button"
                onClick={() => {
                  toast.success("Build complete!");
                  handleComplete();
                }}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              >
                Complete
              </button>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex cursor-not-allowed items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              >
                Complete
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
