import mongoose from "mongoose";

// TODO replace <password> with the password for quicknote-admin
const URI = process.env.DB_URI;

async function connect() {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.log(err);
  }
}

export default connect;
