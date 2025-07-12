import mongoose from "mongoose";

export const connectionDb = async () => {
  try {
    const mongoInstance = await mongoose.connect(
      `${process.env.MONGO_CNN}/jobportal`
    );
    console.log("MongoDb connected: " + mongoInstance.connection.host);
  } catch (err) {
    console.log("Error: " + err);
  }
};
