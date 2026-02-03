import type { Consulta } from "./Consulta";

export interface Paciente {
    id: number;
    nome: string;
    dataNasc: Date;
    telefone: string;
    email: string;
    consulta: Consulta[]
}