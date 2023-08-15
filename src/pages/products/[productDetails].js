import ProductDetails from "@/components/ProductDetails";
import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/api/products");
  const products = await res.json();
  const paths = products.map((product) => ({
    params: { productDetail: product._id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.productDetail;
  const res = await fetch(`http://localhost:5000/api/products/${paths}`);
  const product = await res.json();
  // console.log(product);
  return {
    props: {
      product,
    },
  };
};

const ProductDetailsPage = () => {
  return (
    <div>
      <ProductDetails product={product}/>
    </div>
  );
};

export default ProductDetailsPage;
