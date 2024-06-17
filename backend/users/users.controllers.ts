import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import prisma from "../prismaClient";

const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({});
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

const getUserById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch user" });
  }
});

const deleteUserById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    await prisma.user.delete({
      where: { id },
    });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete user" });
  }
});



export { getAllUsers, getUserById, deleteUserById };
