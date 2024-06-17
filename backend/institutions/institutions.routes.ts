import { Router } from "express";
import {
  getAllInstitutions,
  getInstitutionById,
  createInstitution,
  deleteInstitutionById,
} from "./institutions.controllers";
// import authenticateUser from "../utils/authenticate";

const institutionRouter = Router();

institutionRouter.post("/", createInstitution);
institutionRouter.get("/", getAllInstitutions);
institutionRouter.get("/:id", getInstitutionById);
institutionRouter.delete("/:id", deleteInstitutionById);

export default institutionRouter;
