import React from "react";
import CategoryProducts from "../category/[categoryProducts]";

// export const getStaticProps = async () => {
//   const productData = await fetch("http://localhost:5000/api/products");
//   const products = await productData.json();
//   return {
//     props: {
//       products,
//     },
//   };
// };

const Category = ({ products }) => {
  return (
    <div>
      <CategoryProducts products={products} />
    </div>
  );
};

export default Category;
