import ProductCard from "@/components/ProductCard";
import RootLayout from "@/layouts/RootLayout";
import { useRouter } from "next/router";
import React from "react";



const CategoryProducts = ({ products }) => {
  
  const router = useRouter();
  const { category } = router.query;
  console.log(category);

   const categoryProducts = products.filter(
     (product) => product.category === category
   );

  return (
    <div>
      {
        categoryProducts.map((product) => <ProductCard key={product._id} products={products} />)
      }
    </div>
  )
};

export default CategoryProducts;

CategoryProducts.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
