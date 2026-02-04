import { FormConsulta } from "../../components/consulta/formconsulta/FormConsulta";
import { ListaConsulta } from "../../components/consulta/listaconsulta/ListaConsulta";

export function Consultas() {
  return (
    <div className="page-container">
      <h1>Agendamento de Consultas</h1>

      <FormConsulta />
      <ListaConsulta />
    </div>
  );
}
