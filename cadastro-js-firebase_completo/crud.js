// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCK1CHQYiFSzy9GsY6avbTonpIsRMIHQvA",
  authDomain: "cadastro-def1f.firebaseapp.com",
  projectId: "cadastro-def1f",
  storageBucket: "cadastro-def1f.appspot.com",
  messagingSenderId: "114845756464",
  appId: "1:114845756464:web:37e0fbd26f1afbf2e851f5",
  measurementId: "G-MN5TBPN68N"
};

// Inicializa o Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Variáveis de controle
let editando = false;
let alunoIdAtual = null;

// Evento de submit do formulário
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const matricula = document.getElementById('matricula').value;
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  
  if (editando) {
    atualizarAluno(alunoIdAtual, matricula, nome, email);
  } else {
    cadastrarAluno(matricula, nome, email);
  }
});

// Evento do botão cancelar
document.getElementById('btnCancelar').addEventListener('click', cancelarEdicao);

// Função para cadastrar aluno
function cadastrarAluno(matricula, nome, email) {
  db.collection('alunos').add({
    matricula: matricula,
    nome: nome,
    email: email
  })
  .then(() => {
    alert('Aluno cadastrado com sucesso!');
    document.getElementById('cadastroForm').reset();
    listarAlunos();
  })
  .catch((error) => {
    console.error('Erro ao cadastrar aluno:', error);
    alert('Erro ao cadastrar aluno.');
  });
}

// Função para listar alunos
function listarAlunos() {
  const tbody = document.querySelector('#listaAlunos tbody');
  tbody.innerHTML = '<tr><td colspan="4">Carregando...</td></tr>';

  db.collection('alunos').get()
    .then((querySnapshot) => {
      tbody.innerHTML = '';
      
      if (querySnapshot.empty) {
        tbody.innerHTML = '<tr><td colspan="4">Nenhum aluno cadastrado.</td></tr>';
        return;
      }

      querySnapshot.forEach((doc) => {
        const aluno = doc.data();
        const alunoId = doc.id;
        
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${aluno.matricula}</td>
          <td>${aluno.nome}</td>
          <td>${aluno.email}</td>
          <td class="actions">
            <button onclick="editarAluno('${alunoId}', '${aluno.matricula}', '${aluno.nome}', '${aluno.email}')">Editar</button>
            <button onclick="excluirAluno('${alunoId}')">Excluir</button>
          </td>
        `;
        
        tbody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error('Erro ao carregar alunos:', error);
      tbody.innerHTML = '<tr><td colspan="4">Erro ao carregar alunos.</td></tr>';
    });
}

// Função para editar aluno
function editarAluno(id, matricula, nome, email) {
  editando = true;
  alunoIdAtual = id;
  
  document.getElementById('alunoId').value = id;
  document.getElementById('matricula').value = matricula;
  document.getElementById('nome').value = nome;
  document.getElementById('email').value = email;
  
  document.getElementById('btnCadastrar').textContent = 'Atualizar';
  document.getElementById('btnCancelar').style.display = 'inline-block';
}

// Função para atualizar aluno
function atualizarAluno(id, matricula, nome, email) {
  db.collection('alunos').doc(id).update({
    matricula: matricula,
    nome: nome,
    email: email
  })
  .then(() => {
    alert('Aluno atualizado com sucesso!');
    cancelarEdicao();
    listarAlunos();
  })
  .catch((error) => {
    console.error('Erro ao atualizar aluno:', error);
    alert('Erro ao atualizar aluno.');
  });
}

// Função para excluir aluno
function excluirAluno(id) {
  if (confirm('Tem certeza que deseja excluir este aluno?')) {
    db.collection('alunos').doc(id).delete()
      .then(() => {
        alert('Aluno excluído com sucesso!');
        listarAlunos();
      })
      .catch((error) => {
        console.error('Erro ao excluir aluno:', error);
        alert('Erro ao excluir aluno.');
      });
  }
}

// Função para cancelar edição
function cancelarEdicao() {
  editando = false;
  alunoIdAtual = null;
  
  document.getElementById('cadastroForm').reset();
  document.getElementById('alunoId').value = '';
  
  document.getElementById('btnCadastrar').textContent = 'Cadastrar';
  document.getElementById('btnCancelar').style.display = 'none';
}

// Carrega os alunos quando a página é carregada
window.onload = listarAlunos;