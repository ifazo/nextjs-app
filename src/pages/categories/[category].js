import AllProducts from "@/components/AllProducts";
import RootLayout from "@/layouts/RootLayout";

export const getStaticPaths = async () => {
    if (typeof window !== "undefined") {
      return {
        paths: [],
        fallback: false,
      };
    }
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`);
    const data = await res.json();
    const paths = data.map((category) => {
      return {
        params: {
          category: category.name,
        },
      };
    });
    return {
      paths,
      fallback: false,
    };
};

export const getStaticProps = async (context) => {
  const { category } = context.params;
    if (typeof window !== "undefined") {
      return {
        props: {
          data: {},
        },
      };
    }
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories/${category}`);
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
};

const Category = ({ data }) => {
  return (
    <div>
      <AllProducts data={data} />
    </div>
  );
};

export default Category;

Category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
