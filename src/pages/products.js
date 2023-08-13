import ProductCard from '@/components/ProductCard'
import React from 'react'

export const getStaticProps = async () => {
  const productData = await fetch("http://localhost:5000/api/products");
  const products = await productData.json();
  return {
    props: {
      products,
    },
  };
};

const Products = ({products}) => {
  return (
      <div>
          <ProductCard products={products} />
    </div>
  )
}

export default Products