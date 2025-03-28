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

// Adiciona um listener para o formulário de cálculo
document.getElementById('calculoForm').addEventListener('submit', function (event) {
    event.preventDefault();
    //const matricula = document.getElementById('matricula').value;
    const areaObra = document.getElementById('area-obra').value;
    const custoMateriais = document.getElementById('custo-materiais').value;
    const custoObra = document.getElementById('custo-obra').value;
    cadastrarCusto(areaObra, custoMateriais, custoObra);
    calcularCusto();
});

function cadastrarCusto(areaObra, custoMateriais, custoObra) {// Função para cadastrar um aluno no Firestore
    db.collection('custos').add({
        areaObra: areaObra, 
        custoMateriais: custoMateriais,
        custoObra: custoObra
    })

    .then(() => {
        alert('Custo cadastrado com sucesso!');
        document.getElementById('calculoForm').reset(); // Limpa o formulário
        listarCustos(); // Atualiza a lista de custos após o cadastro
    })
    .catch((error) => {
        console.error('Erro ao cadastrar Custo: ', error);
        alert('Erro ao cadastrar custo. Tente novamente.'); }); 
    }

function calcularCusto(areaObra, custoMateriais, custoObra) {
    const custoTotal = document.HTMLFormElement();
    custoTotal = (custoMateriais + custoObra) / areaObra;
}

// Função para listar os alunos cadastrados
function listarCustos() {
    const listaCustos = document.getElementById('listaCusto');
    listaCustos.innerHTML = ''; // Limpa a lista antes de atualizar
    db.collection('custos').get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const custo = doc.data(); // Dados do documento
            const itemLista = document.createElement('li'); // Cria um item de lista
            itemLista.textContent = `Area Obra: ${custo.areaObra} Custo Materiais: ${custo.custoMateriais} Custo Obra: ${custo.custoObra} Custo Final: ${custo.custoTotal}`;
            listaCustos.appendChild(itemLista); // Adiciona o item à lista
        });
    })
    .catch((error) => {
        console.error('Erro ao buscar custos: ', error);
    });
}
// Carrega a lista de custos ao carregar a página
window.onload = listarCustos;