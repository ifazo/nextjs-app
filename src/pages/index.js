import Category from "@/components/Category";
import Products from "@/components/Products";
import RootLayout from "@/layouts/RootLayout";


export default function Home() {
  return (
    <main>
      <Products />
      <Category />
    </main>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  );
};