import { database } from "..";

export default async function productsHandler ( req, res ) {
  const { category } = req.query;
  const data = req.body;
  const productCollection = database.collection("products");
  if (req.method === "GET" && category) {
    const products = await productCollection
      .find({ category: category })
      .toArray();
    res.send({ products });
  } else if (req.method === "POST") {
    const result = await productCollection.insertOne(data);
    res.send(result);
  } else if (req.method === "GET") {
    const products = await productCollection.find({}).toArray();
    res.send({ products });
  } else {
    res.send({ error: "Bad request" });
  }
}
