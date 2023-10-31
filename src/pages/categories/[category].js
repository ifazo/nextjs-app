import AllProducts from "@/components/AllProducts";

export async function getServerSideProps({ params: { category } }) {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/categories/${category}`
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
}
