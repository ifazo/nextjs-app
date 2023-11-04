import ProductDetails from "@/components/ProductDetails";
import React from "react";

export async function getServerSideProps({ params: { product } }) {
  const res = await fetch(`${process.env.BACKEND_URL}/api/products/${product}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Product({ data }) {
  return (
    <div>
      <ProductDetails data={data} />
    </div>
  );
}
