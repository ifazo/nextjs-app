import React from "react";
import BuilderProducts from "@/components/BuilderProducts";

export async function getServerSideProps({ params: { cid } }) {
  const res = await fetch(
    `http://localhost:3000/api/categories/${cid}`
  );
  const data = await res.json();
  return { props: { data } };
}

export default function builderCategory({ data }) {
  return (
    <>
      <BuilderProducts data={data} />
    </>
  );
}
