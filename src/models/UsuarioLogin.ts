import type { Consulta } from "./Consulta";
import type { Especialidade } from "./Especialidade";

export interface UsuarioLogin {
    id: number;
    nome: string;
    especialidade: Especialidade;
    consulta: Consulta[];
    usuario: string;
    senha: string;
    foto: string;
    token: string;
}