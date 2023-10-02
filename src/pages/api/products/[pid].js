import { ObjectId } from "mongodb";
import { database } from "..";

export default async function productHandler(req, res) {
  const { pid } = req.query;
  const data = req.body;
  const productCollection = database.collection("products");
  if (req.method === "GET") {
    const product = await productCollection.findOne({ _id: new ObjectId(pid) });
    res.send({ product });
  } else if (req.method === "DELETE") {
    const result = await productCollection.deleteOne({
      _id: new ObjectId(pid),
    });
    res.send(result);
  } else if (req.method === "PATCH") {
    const result = await productCollection.updateOne(
      { _id: new ObjectId(pid) },
      { $set: data }
    );
    res.send(result);
  }
}
