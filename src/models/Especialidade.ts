import type { Consulta } from "./Consulta";
import type { Medico } from "./Medico";

export interface Especialidade {
    id: number;
    nome: string;
    medico: Medico[];
    consulta: Consulta;
}