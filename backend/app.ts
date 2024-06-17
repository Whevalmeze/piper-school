import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import authRouter from "./auth/auth.routes";
import userRouter from "./users/users.routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Healthy API");
});

// ENDPOINT
app.use("/auth", authRouter);
app.use("/users", userRouter);

export default app;
