import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import ThemeToggle from "./components/botão-tema/ThemeToggle";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Perfil from "./pages/perfil/Perfil";
import PrivateRoute from "./routes/PrivateRoute";
import Sobrenos from "./pages/sobrenos/Sobrenos";

import ListaEspecialidades from "./components/especialidade/listaespecialidades/ListaEspecialidades";
import FormEspecialidade from "./components/especialidade/formespacialidade/FormEspecialidade";
import DeletarEspecialidade from "./components/especialidade/deletarespecialidade/DeletarEspecialidade";

import ListaConsulta from "./components/consulta/listaconsulta/ListaConsulta";
import FormConsulta from "./components/consulta/formconsulta/FormConsulta";
import DeletarConsulta from "./components/consulta/deletarconsulta/DeletarConsulta";

import ConstelacaoBackground from "./components/background/ConstelacaoBackground";
import { AuthProvider } from "./contexts/AuthContext";
import ConsultaPaciente from "./components/consulta/formconsulta/ConsultaPaciente";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ConstelacaoBackground>
          <ToastContainer />

          <div className="app-shell">
            <Navbar />

            <main className="min-h-[80vh]">
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />

                <Route path="/especialidades" element={<ListaEspecialidades />} />
                <Route path="/cadastrarespecialidade" element={<FormEspecialidade />} />
                <Route path="/editarespecialidade/:id" element={<FormEspecialidade />} />
                <Route path="/deletarespecialidade/:id" element={<DeletarEspecialidade />} />

                <Route path="/consultas" element={<ListaConsulta />} />
                <Route path="/marcarconsulta" element={<FormConsulta />} />
                <Route path="/editarconsulta/:id" element={<FormConsulta />} />
                <Route path="/deletarconsulta/:id" element={<DeletarConsulta />} />

                <Route
                  path="/perfil"
                  element={
                    <PrivateRoute>
                      <Perfil />
                    </PrivateRoute>
                  }
                />

                <Route path="/sobrenos" element={<Sobrenos />} />
              </Routes>
            </main>

            <ThemeToggle />
            <Footer />
          </div>
        </ConstelacaoBackground>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
