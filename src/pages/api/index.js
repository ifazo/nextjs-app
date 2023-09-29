import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URI;

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const database = client.db("PCbuilder");

export default async function handler ( req, res ) {
  res.status(200).json({ message: "MongoDB connected to Next.js successfully!" });
}