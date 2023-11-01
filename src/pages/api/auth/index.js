import database from "@/db";
import User from "@/models/userModel";

export default async function handler(req, res) {
  await database();
  if (req.method === "POST") {
    const data = req.body;
    const user = await User.findOne({ email: data.email });
    if (!user) {
      res.status(400).send("User not found");
    }
    if (user.password !== data.password) {
      res.status(400).send("Invalid password");
    }
    res.send(user);
  } else {
    res.status(400).send("Unknown request");
  }
}
