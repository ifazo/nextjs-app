import { connect } from "mongoose";

async function database() {
  await connect(`${process.env.MONGODB_URI}`);
}

database().catch((err) => console.log(err));

export default database;
