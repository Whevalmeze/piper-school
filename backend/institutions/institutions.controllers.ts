import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import prisma from "../prismaClient";
import { IUserRequest } from "../utils/authenticate";

const createInstitution = asyncHandler(async (req: Request, res: Response) => {
  try {
    // const userId = req.user?.id;
    // console.log("hello", userId);
    const { name, address, userId } = req.body;
    if (!userId || !name) {
      res.status(400).json({ message: "Name, or userId are required" });
      return;
    }

    const newInstitution = await prisma.institution.create({
      data: {
        name,
        address,
        userId,
      },
    });

    res.status(201).json(newInstitution);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create institution" });
  }
});

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

const deleteInstitutionById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const institution = await prisma.institution.findUnique({
        where: { id },
      });

      if (!institution) {
        res.status(404).json({ message: "Institution not found" });
        return;
      }

      await prisma.institution.delete({
        where: { id },
      });

      res.status(200).json({ message: "Institution deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to delete institution" });
    }
  }
);
export {
  createInstitution,
  getAllInstitutions,
  getInstitutionById,
  deleteInstitutionById,
};
