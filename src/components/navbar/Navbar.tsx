
import React from "react"

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex space-x-4">
        <li><a href="/">Home</a></li>
        <li><a href="/consultas">Consultas</a></li>
        <li><a href="/especialidades">Especialidades</a></li>
        <li><a href="/perfil">Perfil</a></li>
         <li><a href="/sobrenos">Sobre-nos</a></li>
          <li><a href="/login">login</a></li>
          <li><a href="/cadastro">cadastro</a></li>
      </ul>
    </nav>
  )
}

export default Navbar