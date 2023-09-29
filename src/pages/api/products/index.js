import { database } from "..";

export default async function productsHandler(req, res) {
  const data = req.body;
  const productCollection = database.collection("products");
  if (req.method === "POST") {
    const result = await productCollection.insertOne(data);
    res.send(result);
  } else if (req.method === "GET") {
    const products = await productCollection.find({}).toArray();
    res.status(200).json({ products });
  }
}
