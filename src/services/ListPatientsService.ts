import { readFileSync } from "fs";
import { join } from "path";

class ListPatientsService {
  /**
   * Retorna a lista de pacientes.
   *
   * @returns string
   */
  async execute() {
    const FILE_PATH = "path_to_file";
    const FILE_NAME = "patients.json";

    /**
     * Leitura do arquivo.
     */
    const file = readFileSync(join(FILE_PATH, FILE_NAME));

    return JSON.parse(file.toString());
  }
}

export { ListPatientsService };
