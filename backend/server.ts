import app from "./app";
import prisma from "./prismaClient";
import { PORT } from "./utils/config";

// Start the server
const startServer = async () => {
  try {
    await prisma.$connect(); // Connect to the database
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to database:", error);
    process.exit(1);
  }
};

startServer();
