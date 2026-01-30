import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Cadastro from './pages/cadastro/Cadastro';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import FormEspecialidade from './components/especialidade/formespacialidade/FormEspecialidade';
import DeletarEspecialidade from './components/especialidade/deletarespecialidade/DeletarEspecialidade';
import ListaConsulta from './components/consulta/listaconsulta/ListaConsulta';
import FormConsulta from './components/consulta/formconsulta/FormConsulta';
import DeletarConsulta from './components/consulta/deletarconsulta/DeletarConsulta';
import Perfil from './pages/perfil/Perfil';
import ListaEspecialidades from './components/especialidade/listaespecialidades/ListaEspecialidades';
import Sobrenos from './pages/sobrenos/Sobrenos';


function App() {
	return (
		<>
			
				<ToastContainer />
				<BrowserRouter>
					<Navbar />
					<div className="min-h-[80vh]">
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/home" element={<Home />} />
							<Route path="/cadastro"	element={<Cadastro />}/>
							<Route path="/especialidades" element={<ListaEspecialidades />} />
							<Route path="/cadastrarespecialidade" element={<FormEspecialidade />} />
                            <Route path="/editarespecialidade/:id" element={<FormEspecialidade />} />
							<Route path="/deletarespecialidade/:id" element={<DeletarEspecialidade />} />
							<Route path="/consultas" element={<ListaConsulta />} />
							<Route path="/cadastrarconsulta" element={<FormConsulta />} />
							<Route path="/editarconsulta/:id" element={<FormConsulta />} />
							<Route path="/deletarconsulta/:id" element={<DeletarConsulta />} />
							<Route path="/perfil" element={<Perfil />} />
							<Route path="/sobrenos" element={<Sobrenos />} />
						</Routes>
					</div>
					<Footer />
				</BrowserRouter>
			
		</>
	)
}

export default App
