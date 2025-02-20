import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("Error", (error) => {
      console.log(`Error while listening on ${process.env.PORT}`, error);
      throw error;
    });

    app.listen(process.env.PORT || 7000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Error while connecting to the database`, error);
    throw error;
  });
