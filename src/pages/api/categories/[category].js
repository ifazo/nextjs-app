import database from "@/db";
import Product from "@/models/productModel";

export default async function handler(req, res) {
  await database();
  const category = req.query.category;
  if (req.method === "GET") {
    const result = await Product.find({category});
    res.status(200).json(result);
  } else {
    res.status(400).send("Unknown request");
  }
}
