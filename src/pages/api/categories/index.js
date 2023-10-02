import { database } from "..";

export default async function categoryHandler(req, res) {
  const categoriesCollection = database.collection("categories");
  if (req.method === "GET") {
    const categories = await categoriesCollection.find().toArray();
    res.send({ categories });
  }
}
