import ProductDetails from "@/components/ProductDetails";
import React from "react";

export const getStaticPaths = async () => {
    if (typeof window !== "undefined") {
      return {
        paths: [],
        fallback: false,
      };
    }
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`);
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    const paths = data?.map((product) => {
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
    if (typeof window !== "undefined") {
      return {
        props: {
          data: {},
        },
      };
    }
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products/${product}`);
    if (!res.ok) {
      throw new Error("Failed to fetch product data");
    }
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
};

const Product = ({ data }) => {
  return (
    <div>
      <ProductDetails data={data} />
    </div>
  );
};

export default Product;
