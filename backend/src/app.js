import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(bodyParser.json());

// import routes
import studentRouter from "./routes/student.route.js";

// use routes
app.use("/api/v1/students", studentRouter);

export { app };
