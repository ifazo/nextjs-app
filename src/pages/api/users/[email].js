import database from "@/db";
import User from "@/models/userModel";

export default async function handler(req, res) {
  await database();
  const { email } = req.query;

  if (req.method === "GET") {
    const result = await User.findOne({ email });
    return res.status(200).json(result);
  } else if (req.method === "DELETE") {
    const result = await User.findOneAndDelete({ email });
    return res.status(200).json(result);
  } else {
    return res.status(400).send("Unknown request");
  }
}
