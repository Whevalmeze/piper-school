import { Router } from "express";
import {
  getAllInstitutions,
  getInstitutionById,
  createInstitution,
  deleteInstitutionById,
  updateInstitutionById,
} from "./institutions.controllers";
// import authenticateUser from "../utils/authenticate";

const institutionRouter = Router();

institutionRouter.post("/", createInstitution);
institutionRouter.get("/", getAllInstitutions);
institutionRouter.get("/:id", getInstitutionById);
institutionRouter.delete("/:id", deleteInstitutionById);
institutionRouter.patch("/:id", updateInstitutionById);

export default institutionRouter;
