import { connect } from "mongoose";

database().catch((err) => console.log(err));

async function database() {
  await connect(`${process.env.MONGODB_URI}`);
}

export default database;
