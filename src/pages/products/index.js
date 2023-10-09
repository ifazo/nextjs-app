import AllProducts from "@/components/AllProducts";

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/products`);
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
