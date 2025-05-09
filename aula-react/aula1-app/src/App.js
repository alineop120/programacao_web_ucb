import './App.css';
import { useState } from 'react';

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  // Criando um objeto para armazenar os dados do formulário
  const [user, setUser] = useState({}); // Inicializa vazio para armazenar os dados

  // Função para registrar os dados do formulário
  function registrar(e) {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário
    setUser({
      nome: nome,
      email: email,
    });
  }

  return (
    <div>
      {/* Formulário de entrada */}
      <form onSubmit={registrar}>
        <label>Nome: </label>
        <input
          placeholder="Digite o nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />

        <label>Email: </label>
        <input
          placeholder="Digite o e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <button type="submit">Cadastrar</button>
      </form>

      {/* Exibindo as informações do usuário após o registro */}
      <div>
        {user.nome && (
          <div>
            <p>Bem-vindo, {user.nome}!</p>
            <p>Email: {user.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
