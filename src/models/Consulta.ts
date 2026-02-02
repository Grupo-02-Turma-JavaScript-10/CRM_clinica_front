import type { Especialidade } from "./Especialidade";
import type { Medico } from "./Medico";
import type { Paciente } from "./Paciente";

export interface Consulta {
    id: number;
    data: Date;
    hora: string;
    descricaoSintomas: string;
    realizado: boolean;
    especialidade: Especialidade;
    medico: Medico;
    paciente: Paciente;
}