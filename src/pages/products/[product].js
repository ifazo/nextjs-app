import ProductDetails from "@/components/ProductDetails";
import React from "react";

export const getStaticPaths = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/products`);
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
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
  } catch (error) {
    console.error("Error fetching product paths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async (context) => {
  const { product } = context.params;
  try {
    const res = await fetch(`http://localhost:3000/api/products/${product}`);
    if (!res.ok) {
      throw new Error("Failed to fetch product data");
    }
    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      props: {
        data: {},
      },
    };
  }
};

const Product = ({ data }) => {
  return (
    <div>
      <ProductDetails data={data} />
    </div>
  );
};

export default Product;
