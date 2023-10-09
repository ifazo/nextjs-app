import AllProducts from "@/components/AllProducts";
import RootLayout from "@/layouts/RootLayout";

import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/categories");
  const data = await res.json();
  const paths = data.categories.map((category) => {
    return {
      params: {
        category: category.name,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { category } = context.params;
  const res = await fetch(
    `http://localhost:3000/api/products?category=${category}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const Category = ({ data }) => {
  return (
    <div>
      <AllProducts data={data} />
    </div>
  );
};

export default Category;

Category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
