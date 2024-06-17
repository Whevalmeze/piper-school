import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { JWT_SECRET } from "./config";

const generateToken = (userId: string): string => {
  const secretKey = process.env.JWT_SECRET || "your_secret_key";
  const token = jwt.sign({ id: userId }, secretKey, { expiresIn: "1h" });
  return token;
};

const comparePasswords = async (
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

export { generateToken, comparePasswords };
