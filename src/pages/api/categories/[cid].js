import { ObjectId } from "mongodb";
import { database } from "..";

export default async function productHandler(req, res) {
  const { cid } = req.query;
    const categoriesCollection = database.collection("categories");
    const productsCollection = database.collection("products");
  if (req.method === "GET") {
    const category = await categoriesCollection.findOne({
      _id: new ObjectId(cid),
    });
    const products = await productsCollection.find({ category: category.name }).toArray();
    res.send({ products });
  } else {
      res.send("Unknown request")
  }
}
