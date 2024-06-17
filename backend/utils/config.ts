import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
const SALT = process.env.SALT as string;

export { PORT, JWT_SECRET, REFRESH_TOKEN_SECRET, SALT };
