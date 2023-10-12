import AllProducts from "@/components/AllProducts";
import RootLayout from "@/layouts/RootLayout";

export const getStaticPaths = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/categories");
    const data = await res.json();
    const paths = data.categories.map((category) => {
      return {
        params: {
          category: category._id,
        },
      };
    });
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching product paths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async (context) => {
  const { category } = context.params;
  try {
    const res = await fetch(`http://localhost:3000/api/categories/${category}`);
    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      props: {
        data: {},
      },
    };
  }
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
