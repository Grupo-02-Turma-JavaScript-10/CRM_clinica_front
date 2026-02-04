import { isAuthenticated } from "../../../utils/Auth";
import ConsultaMedico from "./ConsultaMedico";
import ConsultaPaciente from "./ConsultaPaciente";

function FormConsulta() {
  
  return(
    <>
      {
        isAuthenticated() ?
        <ConsultaMedico /> :
        <ConsultaPaciente/> 
      }
    </>
  )
}
export default FormConsulta;