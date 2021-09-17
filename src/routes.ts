import { Router } from "express";

import { ListPatientsController } from "./controllers/ListPatientsController";

const router = Router();

/**
 * Controller para a listagem de pacientes.
 */
const listPatientsController = new ListPatientsController();

/**
 * Rota para a listagem de todos os pacientes
 */
router.get("/patients", listPatientsController.handle)


export { router };