import ProductDetails from "@/components/ProductDetails";
import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  console.log(data);
  const paths = data.products.map((product) => {
    return {
      params: {
        product: product._id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { product } = context.params;
  const res = await fetch(`http://localhost:3000/api/products/${product}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const Product = ({ data }) => {
  console.log(data.product);
  return (
    <div>
      <ProductDetails />
    </div>
  );
};

export default Product;
