import AllProducts from "@/components/AllProducts";
import RootLayout from "@/layouts/RootLayout";

export const getServerSideProps = async (context) => {
  const { category } = context.query
  if (typeof window !== "undefined") {
    return {
      props: {
        data: {},
      },
    };
  }
  const res = await fetch(`${ process.env.NEXTAUTH_URL }/api/categories/${ category }`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
 
const Category = ({ data }) => {
  return (
    <div>
      {/* <AllProducts data={data} /> */}
      <p>All products by category page</p>
    </div>
  );
};

export default Category;

Category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
