import CategoryList from "@/components/CategoryList";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import RootLayout from "@/layouts/RootLayout";

export async function getStaticProps() {
  if (typeof window !== "undefined") {
    return {
      props: {
        data1: [],
        data2: [],
      },
    };
  }
  const res1 = await fetch(`${process.env.NEXTAUTH_URL}/api/products`);
  const data1 = await res1.json();
  const res2 = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`);
  const data2 = await res2.json();

  return {
    props: {
      data1,
      data2,
    },
  };
}

export default function Home({ data1, data2 }) {
  return (
    <main>
      <Hero />
      <ProductList data={data1} />
      <CategoryList data={data2} />
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
