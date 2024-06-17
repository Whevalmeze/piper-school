import prisma from "../prismaClient";
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

import generateHashedPassword from "../utils/generateHashPassword";
import { comparePasswords, generateToken } from "../utils/auth";

const registerUser = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400);
      throw new Error("Email and password are required");
    }

    const lowercaseEmail = email.toLowerCase();
    const hashedPassword = await generateHashedPassword(password);

    // Check if the email already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email: lowercaseEmail,
      },
    });

    if (existingUser) {
      res.status(400);
      throw new Error("Email already exists");
    }

    // Create the new user
    await prisma.user.create({
      data: {
        email: lowercaseEmail,
        password: hashedPassword || password,
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

const loginUser = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const lowercaseEmail = email.toLowerCase();

    // check that user exist
    const existingUser = await prisma.user.findUnique({
      where: {
        email: lowercaseEmail,
      },
    });

    if (!existingUser) {
      res.status(401);
      throw new Error("Invalid email or password");
    }

    const isPasswordValid = await comparePasswords(
      password,
      existingUser.password
    );

    if (!isPasswordValid) {
      res.status(401);
      throw new Error("Invalid email or password");
    }

    const token = generateToken(existingUser.id);

    res.status(200).json({
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "User login failed",
    });
  }
});

export { registerUser, loginUser };
