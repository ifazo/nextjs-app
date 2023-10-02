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

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
