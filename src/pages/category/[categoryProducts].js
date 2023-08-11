import Products from '@/components/Products'
import RootLayout from '@/layouts/RootLayout'
import React from 'react'

const CategoryProducts = () => {
  return (
    <Products />
  )
}

export default CategoryProducts

CategoryProducts.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};