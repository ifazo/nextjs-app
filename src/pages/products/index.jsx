
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  
  return {
    props: {
      products: data,
    },
  };
}

const Products = ({ products }) => {
  console.log(products);
  return (
    <>
      Product Page 
    </>
  );
};

export default Products;
