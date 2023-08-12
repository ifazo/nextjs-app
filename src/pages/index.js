import Category from "@/components/Category";
import Products from "@/components/Products";
import RootLayout from "@/layouts/RootLayout";


export default function Home({ categories}) {
  return (
    <main>
      <Products />
      <Category categories={categories} />
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/api/categories");
  const categories = await res.json();
  console.log(categories);
  return {
    props: {
      categories,
    },
  };
};
