import BuilderList from "@/components/BuilderList";
import React from "react";

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Builder({ data }) {
  return (
    <div>
      <BuilderList data={data} />
    </div>
  );
}
