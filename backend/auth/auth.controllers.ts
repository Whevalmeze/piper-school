import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

import generateHashedPassword from "../utils/generateHashPassword";
const prisma = new PrismaClient();

const registerUser = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const lowercaseEmail = email.toLowerCase();
    const hashedPassword = await generateHashedPassword(password);

    // check that email exist
    const existingUser = await prisma.user.findUnique({
      where: {
        email: lowercaseEmail,
      },
    });

    if (existingUser) {
      res.status(400);
      throw new Error("Email already exist");
    }
    await prisma.user.create({
      data: {
        email: lowercaseEmail,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "User registration failed",
    });
  }
});

export { registerUser };
