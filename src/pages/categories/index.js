import AllProducts from "@/components/AllProducts";

export async function getServerSideProps({ query }) {
  const { category } = query;
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

export default function Category({ data }) {
  return (
    <div>
      <AllProducts data={data} />
    </div>
  );
};
