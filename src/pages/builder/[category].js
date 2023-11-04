import React from "react";
import BuilderProducts from "@/components/BuilderProducts";

export async function getServerSideProps({ params: { category } }) {
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/products?category=${category}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function BuilderCategory({ data }) {
  return (
    <>
      <BuilderProducts data={data} />
    </>
  );
}
