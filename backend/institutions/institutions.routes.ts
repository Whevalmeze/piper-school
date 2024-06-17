import { Router } from "express";
import {
  getAllInstitutions,
  getInstitutionById,
} from "./institutions.controllers";

const institutionRouter = Router();

institutionRouter.get("/", getAllInstitutions);
institutionRouter.get("/:id", getInstitutionById);

export default institutionRouter;
