import { Router } from "express";
import { getAllUsers, getUserById } from "./users.controllers";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);

export default userRouter;
