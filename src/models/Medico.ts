import type { Consulta } from "./Consulta";
import type { Especialidade } from "./Especialidade";

export interface Medico {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    consulta: Consulta[];
    especialidade: Especialidade;
}