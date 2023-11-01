import database from "@/db";
import User from "@/models/userModel";

export default async function handler(req, res) {
  await database();
  if (req.method === "POST") {
    const data = req.body;
    const existingUser = User.findOne({ email: data.email });
    if (existingUser) {
      res.status(400).send("User already exists");
    }
    const result = await User.create(data);
    res.send(result);
  } else {
    res.status(400).send("Unknown request");
  }
}
