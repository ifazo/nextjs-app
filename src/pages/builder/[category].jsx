import React from "react";
import BuilderProducts from "@/components/BuilderProducts";

export async function getServerSideProps ( { params: { category } } ) {
  const res = await fetch(
    `http://localhost:3000/api/products?category=${category}`
  );
  const data = await res.json();
  
  return { props: { data } };
}

export default function builderCategory({ data}) {
  return (
    <>
      <BuilderProducts products={data} />
    </>
  );
}
