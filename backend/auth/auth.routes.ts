import { Router } from "express";
import { registerUser } from "./auth.controllers";

const authRouter = Router();

authRouter.post("/register", registerUser);

export default authRouter;
