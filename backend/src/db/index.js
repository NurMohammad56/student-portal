import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionString = await mongoose.connect(
      `${process.env.MONGODB_URI}/student-portal`
    );

    console.log(
      `\nConnected to MongoDB at ${connectionString.connection.host}`
    );
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectDB;
