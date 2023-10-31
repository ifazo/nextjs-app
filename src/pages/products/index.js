import AllProducts from "@/components/AllProducts";

export async function getStaticProps() {
  // if (typeof window !== "undefined") {
  //   return {
  //     props: {
  //       data: [],
  //     },
  //   };
  // }
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

const Products = ({ data }) => {
  return <AllProducts data={data} />;
};

export default Products;
