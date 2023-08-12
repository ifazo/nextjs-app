// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

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