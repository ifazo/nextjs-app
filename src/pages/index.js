import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import RootLayout from "@/layouts/RootLayout";

export default function Home() {
  
  return (
    <main>
      <ProductList />
      <CategoryList />
    </main>
  );
}

export async function getStaticProps () {
  const res = await fetch( "http://localhost:3000/api/products" );
  const products = await res.json();
  const response = await fetch("http://localhost:3000/api/categories");
  const categories = await response.json();
  // console.log(products);
  // console.log(categories);
  return {
    props: {
      products,
      categories,
    },
  };
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
