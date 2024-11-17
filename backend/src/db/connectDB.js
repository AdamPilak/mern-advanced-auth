import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const response = await mongoose.connect(
      process.env.MONGODB_CONNECTION_STRING
    );
    console.log(`MongoDB Connected: ${response.connection.host}`);
  } catch (err) {
    console.log("Error connection to MongoDB: ", err.message);
    process.exit(1);
  }
};
