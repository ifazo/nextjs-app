import AllProducts from "@/components/AllProducts";

export async function getStaticProps() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/products`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Products({ data }) {
  return <AllProducts data={data} />;
}
