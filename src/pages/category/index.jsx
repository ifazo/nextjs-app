import React from "react";
import CategoryProducts from "./[categoryProducts]";


const Category = ({ products }) => {
  return (
    <div>
      <CategoryProducts products={products} />
    </div>
  );
};

export default Category;
