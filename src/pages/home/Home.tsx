import React from "react"
// Importação do componente que contém a estilização dos cards
import ListaConsultas from "../../components/consulta/listaconsulta/ListaConsulta"

function Home() {
  return (
    /* Adicionamos bg-[#0B1220] e min-h-screen para o fundo escuro cobrir a tela toda */
    <div className="bg-[#0B1220] min-h-screen">
      
      {/* Seção de Boas-vindas estilizada para o CRM */}
      <div className="container mx-auto px-6 pt-24 pb-4">
        <h1 className="text-3xl font-bold text-[#EAF2FF]">
          Bem-vindo ao <span className="text-[#3B82F6]">CRM Clínica</span>
        </h1>
        <p className="mt-2 text-[#EAF2FF]/50">
          Gerenciamento inteligente de consultas e especialidades.
        </p>
      </div>

      {/* Renderização da Lista de Consultas com os Cards */}
      <ListaConsultas />
      
    </div>
  )
}

export default Home