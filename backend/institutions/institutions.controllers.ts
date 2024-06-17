import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import prisma from "../prismaClient";

const getAllInstitutions = asyncHandler(async (req: Request, res: Response) => {
  try {
    const institutions = await prisma.institution.findMany();
    res.status(200).json(institutions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch institutions" });
  }
});

const getInstitutionById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const institution = await prisma.institution.findUnique({
      where: { id },
    });
    if (!institution) {
      res.status(404).json({ message: "Institution not found" });
      return;
    }
    res.status(200).json(institution);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch institution" });
  }
});
export { getAllInstitutions, getInstitutionById };
