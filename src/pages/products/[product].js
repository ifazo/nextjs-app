import ProductDetails from "@/components/ProductDetails";
import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
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
  console.log(data);
  return {
    props: {
      data,
    },
  };
};

const Product = ({data}) => {
  return (
    <div>
      <ProductDetails data={data} />
    </div>
  );
};

export default Product;
