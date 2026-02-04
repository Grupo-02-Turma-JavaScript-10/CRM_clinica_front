import { CalendarPlus, CaretDown, CheckCircle } from "@phosphor-icons/react";
import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type { Medico } from "../../../models/Medico";
import { cadastrar } from "../../../services/Service";
import type { Paciente } from "../../../models/Paciente";
import type { Consulta } from "../../../models/Consulta";
import { buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

function ConsultaPaciente() {
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);

  const [medicos, setMedicos] = useState<Medico[]>([])
  const [medicoSelecionado, setMedicoSelecionado] = useState<Medico | null>(null);
  const [paciente, setPaciente] = useState<Paciente>({} as Paciente);
  const [consulta, setConsulta] = useState<Consulta>({
    data: new Date(),
    hora: '',
    descricaoSintomas: '',
    realizado: false,
  } as Consulta);
  const [isLoading, setIsLoading] = useState(false);

  async function buscarMedicos() {
    try {
      const response = await fetch('https://crmed.onrender.com/medicos/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-cache'
      });
      
      if (!response.ok) {
        throw new Error('Erro ao buscar médicos');
      }
      
      const data = await response.json();
      console.log('Médicos carregados do backend:', data);
      setMedicos(data);
    } catch (error) {
      console.error('Erro ao buscar médicos:', error)
    }
  }

  useEffect(() => {
    buscarMedicos()
  }, [])

  useEffect(() => {
    console.log('Estado medicos atualizado:', medicos)
  }, [medicos])

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

  function handleMedicoChange(e: ChangeEvent<HTMLSelectElement>) {
    const medicoId = Number(e.target.value);
    const medico = medicos.find(m => m.id === medicoId);
    setMedicoSelecionado(medico || null);
  }

  async function agendarConsulta(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (!medicoSelecionado) {
      ToastAlerta("Por favor, selecione um médico", "info");
      setIsLoading(false);
      return;
    }

    if (!medicoSelecionado.especialidade) {
      ToastAlerta("O médico selecionado não possui especialidade definida", "erro");
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
      medico: { id: medicoSelecionado.id },
      especialidade: { id: medicoSelecionado.especialidade.id },
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
    <div className="min-h-screen bg-transparent pt-24 pb-20 px-6 font-[var(--font-sans)]">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] mb-4">
            <CalendarPlus size={32} weight="bold" />
          </div>

          <h1 className="text-4xl font-bold text-[var(--text)]">
            Agende sua <span className="text-cyan-500">Consulta</span>
          </h1>

          <p className="text-[var(--muted)] text-sm">
            Preencha os dados da consulta
          </p>
        </div>

        <form
          onSubmit={agendarConsulta}
          className="bg-[var(--surface)] p-10 rounded-[2.5rem] border border-[var(--accent)]/10 space-y-6"
          style={{
            boxShadow:
              "0 0 25px rgba(13, 148, 136, 0.5), 0 0 25px rgba(59, 130, 246, 0.5)",
          }}
        >
          <div className="flex flex-col">
            <label className={labelStyle}>Médico</label>
            <div className="relative">
              <select 
                className={inputStyle}
                value={medicoSelecionado?.id || ''}
                onChange={handleMedicoChange}
                required
              >
                <option value="" disabled>
                  Selecione o médico
                </option>
                {medicos.map((medico) => (
                  <option key={medico.id} value={medico.id}>
                    {medico.nome} - {medico.especialidade?.nome || 'Sem especialidade'}
                  </option>
                ))}
              </select>
              <CaretDown
                size={16}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)] pointer-events-none"
              />
            </div>
          </div>

         
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

       
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className={inputStyle} 
                placeholder="(XX) XXXXX-XXXX"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className={labelStyle}>Email</label>
            <input 
              type="email" 
              name="email"
              value={paciente.email || ''}
              onChange={atualizarEstadoPaciente}
              className={inputStyle} 
              placeholder="exemplo@email.com"
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
              placeholder="Descreva os sintomas..."
              required
            />
          </div>

         
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
                <CheckCircle size={22} />
                Confirmar Agendamento
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConsultaPaciente;