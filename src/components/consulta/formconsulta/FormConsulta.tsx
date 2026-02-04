import {
  CalendarPlus,
  CaretDown,
  CheckCircle,
} from "@phosphor-icons/react";
import { useParams } from "react-router-dom";
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