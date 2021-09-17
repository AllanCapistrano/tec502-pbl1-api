import { Request, Response } from "express";

import { ListPatientsService } from "../services/ListPatientsService";

class ListPatientsController {
  /**
   * Realiza a comunicação entre as requisições e o serviço de listagem de
   * categorias.
   * 
   * @param request Request
   * @param response Response
   * @returns JSON
   */
  async handle(request: Request, response: Response) {
    const listPatientsService = new ListPatientsService();

    const patients = await listPatientsService.execute();

    return response.json(patients);
  }
}

export { ListPatientsController };
