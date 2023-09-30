import ProductDetails from "@/components/ProductDetails";
import React from "react";

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/products/:id");
  const product = await res.json();
  console.log(product);
  return {
    props: {
      product,
    },
  };
}

const ProductDetailsPage = () => {
  return (
    <div>
      <ProductDetails />
    </div>
  );
};

export default ProductDetailsPage;
