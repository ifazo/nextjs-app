import database from "@/db";
import User from "@/models/userModel";

export default async function handler(req, res) {
  await database();
  const data = req.body;
  if (req.method === "POST") {
    const result = await User.create(data);
    res.send(result);
  } else {
    res.status(400).send("Unknown request");
  }
}
