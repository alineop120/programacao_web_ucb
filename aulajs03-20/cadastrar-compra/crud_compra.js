// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBTIQ3TwvU8cwPeMyyaLhcDUcLETcLYRDw",
    authDomain: "testefirebase-9fa84.firebaseapp.com",
    projectId: "testefirebase-9fa84",
    storageBucket: "testefirebase-9fa84.firebasestorage.app",
    messagingSenderId: "213762732701",
    appId: "1:213762732701:web:b4c3a99b0ba5bf0c9fda74",
    measurementId: "G-K456PXRBVD"
};

// Inicialize o Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Adiciona um listener para o formulário de cadastro
document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const nome_vendedor = document.getElementById('nome').value;
    const valor_compra = document.getElementById('valor_compra').value;
    cadastrarUsuario(nome_vendedor, valor_compra);
});

function cadastrarUsuario(nome_vendedor, valor_compra) {// Função para cadastrar um vendedor no Firestore
    db.collection('compras').add({
        nome: nome_vendedor,
        valor_compra: valor_compra
    })

        .then(() => {
            alert('Vendedor cadastrado com sucesso!');
            document.getElementById('cadastroForm').reset(); // Limpa o formulário
            listarUsuarios(); // Atualiza a lista de vendedores após o cadastro
        })
        .catch((error) => {
            console.error('Erro ao cadastrar vendedor: ', error);
            alert('Erro ao cadastrar vendedor. Tente novamente.');
        });
}

// Função para listar os vendedores cadastrados
function listarVendedores() {
    const listaVendedores = document.getElementById('listaVendedores');
    listaVendedores.innerHTML = ''; // Limpa a lista antes de atualizar
    db.collection('compras').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const compras = doc.data(); // Dados do documento
                const itemLista = document.createElement('li'); // Cria um item de lista
                itemLista.textContent = `Nome: ${compras.nome_vendedor} Valor: ${compras.valor_compra}`;
                listaVendedores.appendChild(itemLista); // Adiciona o item à lista
            });
        })
        .catch((error) => {
            console.error('Erro ao buscar vendedor: ', error);
        });
}
// Carrega a lista de alunos ao carregar a página
window.onload = listarUsuarios;
