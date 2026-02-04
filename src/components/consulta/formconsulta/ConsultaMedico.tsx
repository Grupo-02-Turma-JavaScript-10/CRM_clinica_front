import { useContext, useState, type ChangeEvent, type FormEvent } from "react";
import { CalendarPlus, CheckCircle } from "@phosphor-icons/react";
import { AuthContext } from "../../../contexts/AuthContext";
import type { Paciente } from "../../../models/Paciente";
import type { Consulta } from "../../../models/Consulta";
import { cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { useNavigate } from "react-router-dom";

function ConsultaMedico() {
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);

  const [paciente, setPaciente] = useState<Paciente>({} as Paciente);
  const [consulta, setConsulta] = useState<Consulta>({
    data: new Date(),
    hora: '',
    descricaoSintomas: '',
    realizado: false,
  } as Consulta);
  const [isLoading, setIsLoading] = useState(false);

  function atualizarEstadoPaciente(e: ChangeEvent<HTMLInputElement>){
    setPaciente({
      ...paciente,
      [e.target.name]: e.target.value,
    });
  }

  function atualizarEstadoConsulta(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    setConsulta({
      ...consulta,
      [e.target.name]: e.target.value,
    });
  }

  async function agendarConsulta(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (!usuario.id || !usuario.especialidade) {
      ToastAlerta("Você precisa estar logado como médico", "erro");
      setIsLoading(false);
      return;
    }

    // Preparar dados do paciente sem ID
    const { id: _, ...pacienteSemId } = paciente;

    const novaConsulta = {
      data: consulta.data,
      hora: consulta.hora,
      descricaoSintomas: consulta.descricaoSintomas,
      realizado: false,
      medico: { id: usuario.id },
      especialidade: { id: usuario.especialidade.id },
      paciente: pacienteSemId,
    };

    console.log('Enviando consulta:', novaConsulta);

    try {
      await cadastrar('/consulta/new', novaConsulta, () => {}, {});
      ToastAlerta("Consulta agendada com sucesso!", "sucesso");
      navigate('/consultas');
    } catch (error: any) {
      ToastAlerta("Erro ao agendar consulta. Verifique os dados.", "erro");
      console.error('Erro completo:', error);
    } finally {
      setIsLoading(false);
    }
  }
  const inputStyle = `
    w-full bg-[var(--bg)] border border-[var(--accent)]/20 rounded-2xl p-4
    font-[var(--font-sans)] text-[var(--text)]
    transition-all duration-300 placeholder:text-[var(--muted)]/40 appearance-none

    hover:border-[var(--accent)]
    hover:shadow-[0_0_14px_var(--accent)]

    focus-visible:outline-none
    focus-visible:border-[var(--accent)]
    focus-visible:shadow-[0_0_18px_var(--accent)]
  `;

  const labelStyle =
    "text-[10px] font-black uppercase tracking-[0.2em] text-[var(--accent)] ml-2 mb-3 block font-[var(--font-sans)]";
  return (
    <div className="min-h-screen bg-transparent pt-24 pb-20 px-6 transition-colors duration-500 font-[var(--font-sans)]">
      <div className="container mx-auto max-w-2xl">
       
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] mb-4 shadow-lg shadow-[var(--accent)]/5">
            <CalendarPlus size={32} weight="bold" />
          </div>

          <h1 className="text-4xl font-bold text-[var(--text)] tracking-tight font-[var(--font-display)]">
            Cadastro de <span className="text-cyan-500">Consulta</span>
          </h1>

          <p className="text-[var(--muted)] font-medium text-sm">
            Preencha os dados da consulta para continuar.
          </p>
        </div>

        <form
          onSubmit={agendarConsulta}
          className="bg-[var(--surface)] p-10 rounded-[2.5rem] border border-[var(--accent)]/10 relative overflow-hidden transition-all duration-500 font-[var(--font-sans)]"
          style={{
            boxShadow:
              "0 0 25px rgba(13, 148, 136, 0.5), 0 0 25px rgba(59, 130, 246, 0.5)",
          }}
        >
          <div className="space-y-6 relative z-10">
            
            <div className="flex flex-col">
              <label className={labelStyle}>Paciente</label>
              <input
                type="text"
                name="nome"
                value={paciente.nome || ''}
                onChange={atualizarEstadoPaciente}
                placeholder="Digite o nome do paciente"
                className={inputStyle}
                required
              />
            </div>

            
            <div className="flex flex-col">
              <label className={labelStyle}>Data de Nascimento</label>
              <input 
                type="date"
                name="dataNasc"
                value={paciente.dataNasc ? new Date(paciente.dataNasc).toISOString().split('T')[0] : ''}
                onChange={atualizarEstadoPaciente}
                className={inputStyle}
                required
              />
            </div>

           
            <div className="flex flex-col">
              <label className={labelStyle}>Telefone</label>
              <input 
                type="tel"
                name="telefone"
                value={paciente.telefone || ''}
                onChange={atualizarEstadoPaciente}
                placeholder="(XX) XXXXX-XXXX"
                className={inputStyle}
                required
              />
            </div>

           
            <div className="flex flex-col">
              <label className={labelStyle}>E-mail</label>
              <input 
                type="email"
                name="email"
                value={paciente.email || ''}
                onChange={atualizarEstadoPaciente}
                placeholder="exemplo@email.com"
                className={inputStyle}
                required
              />
            </div>

           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className={labelStyle}>Data da Consulta</label>
                <input 
                  type="date"
                  name="data"
                  value={consulta.data ? new Date(consulta.data).toISOString().split('T')[0] : ''}
                  onChange={atualizarEstadoConsulta}
                  className={inputStyle}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className={labelStyle}>Horário</label>
                <input 
                  type="time"
                  name="hora"
                  value={consulta.hora || ''}
                  onChange={atualizarEstadoConsulta}
                  className={inputStyle}
                  required
                />
              </div>
            </div>

            
            <div className="flex flex-col">
              <label className={labelStyle}>Descrição dos Sintomas</label>
              <textarea
                rows={4}
                name="descricaoSintomas"
                value={consulta.descricaoSintomas || ''}
                onChange={atualizarEstadoConsulta}
                className={`${inputStyle} resize-none`}
                placeholder="Descreva detalhadamente os sintomas..."
                required
              />
            </div>

           
            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="
                  w-full py-3 rounded-lg font-medium
                  bg-cyan-500 text-[#EAF2FF]
                  transition-all duration-300
                  hover:bg-cyan-600
                  hover:shadow-[0_0_18px_rgba(13,148,136,0.8)]
                  focus-visible:outline-none
                  focus-visible:shadow-[0_0_22px_rgba(13,148,136,1)]
                  flex items-center justify-center gap-3
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                {isLoading ? (
                  <>Processando...</>
                ) : (
                  <>
                    <CheckCircle size={24} weight="bold" />
                    Confirmar Agendamento
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConsultaMedico;