import mongoose from "mongoose";

// TODO replace <password> with the password for quicknote-admin
const URI = 'mongodb+srv://admin:qwe12345@dungeon-master.dark0ej.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.log(err);
  }
}

export default connect;
