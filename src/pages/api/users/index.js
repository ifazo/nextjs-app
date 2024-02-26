import database from "@/db";
import User from "@/models/userModel";

export default async function handler(req, res) {
  await database();
  const data = req.body;

  if (req.method === "GET") {
    const users = await User.find({});
    return res.send(users);
  } else if (req.method === "POST") {
    const existingUser = User.findOne({ email: data.email });
    if (existingUser) {
      res.status(400).send("User already exists");
      return;
    } else {
      const result = await User.create(data);
      return res.send(result);
    }
  } else {
    res.status(400).send("Unknown request");
  }
}
