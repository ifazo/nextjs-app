import BuilderList from "@/components/BuilderList";
import React from "react";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/categories");
  const data = await res.json()
  return { props: { data } }
}

export default function builder({data}) {
  return (
    <div>
      <BuilderList data={data} />
    </div>
  );
}
