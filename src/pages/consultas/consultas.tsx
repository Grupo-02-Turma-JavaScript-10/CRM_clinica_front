import { useState } from "react";
import { cadastrar } from "../../services/Service";
import  { Button } from "../../components/button/Button";


export function Consultas() {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  function validarEmail(value: string) {
    const re = /\S+@\S+\.\S+/;
    return re.test(value);
  }

  function validarTelefone(value: string) {
    const re = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    return re.test(value);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setErro("");
    setSucesso("");

    if (!nomeCompleto || !dataNascimento || !telefone || !email) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    if (!validarEmail(email)) {
      setErro("Por favor, insira um email válido.");
      return;
    }

    if (!validarTelefone(telefone)) {
      setErro("Por favor, insira um telefone válido no formato (XX) XXXXX-XXXX.");
      return;
    }

    try {
      setCarregando(true);

      await cadastrar(
        "/consultas",
        {
          nomeCompleto,
          dataNascimento,
          telefone,
          email,
        },
        () => {}, // não precisamos da resposta da API aqui
        {} // sem headers por enquanto
      );

      setSucesso("Consulta agendada com sucesso!");
      setNomeCompleto("");
      setDataNascimento("");
      setTelefone("");
      setEmail("");
    } catch (error) {
      setErro("Erro ao agendar a consulta. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agendar Consulta</h2>

      <input
        placeholder="Nome Completo"
        value={nomeCompleto}
        onChange={(e) => setNomeCompleto(e.target.value)}
      />

      <input
        type="date"
        placeholder="Data de Nascimento"
        value={dataNascimento}
        onChange={(e) => setDataNascimento(e.target.value)}
      />

      <input
        placeholder="Telefone (XX) XXXXX-XXXX"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button type="submit" disabled={carregando}>
        {carregando ? "Agendando..." : "Agendar Consulta"}
      </Button>

      {erro && <p className="error">{erro}</p>}
      {sucesso && <p className="success">{sucesso}</p>}
    </form>
  );
}
