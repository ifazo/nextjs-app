import { database } from "..";

export default async function productsHandler ( req, res ) {
  const data = req.body;
  const productsCollection = database.collection("products");
  if (req.method === "POST") {
    const result = await productsCollection.insertOne(data);
    res.send(result);
  } else if (req.method === "GET") {
    const products = await productsCollection.find({}).toArray();
    res.send({ products });
  } else {
    res.send({ error: "Bad request" });
  }
}
