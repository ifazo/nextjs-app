import ProductCard from '@/components/ProductCard';
import RootLayout from '@/layouts/RootLayout'
import React from 'react'

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:5000");
//   const products = await res.json();
//   const paths = products.map((product) => ({
//     params: { productDetail: product._id },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/api/products");
  const products = await res.json();
  console.log(products);
  return {
    props: {
      products,
    },
  };
};

const CategoryProducts = ({products}) => {
  return <ProductCard products={products} />;
}

export default CategoryProducts

CategoryProducts.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
