import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import RootLayout from "@/layouts/RootLayout";

export const getStaticProps = async () => {
  const productData = await fetch("http://localhost:5000/api/products");
  const products = await productData.json();
  const categoryData = await fetch("http://localhost:5000/api/categories");
  const categories = await categoryData.json();
  
  return {
    props: {
      products,
      categories,
    },
  };
};

export default function Home({ products, categories }) {
  return (
    <main>
      <ProductCard products={products} />
      <CategoryCard categories={categories} />
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
