var area = document.getElementById('area');

let nota1, nota2, nota3;

function entrada() {
    var nome = prompt("Informe seu nome: ");
    var curso = prompt("Informe o seu curso: ");
    if (!nome || !curso) {
        alert("Ops, algo de errado não está certo!");
        area.innerHTML = "Clique no botão para acessar...";
    } else {
        area.innerHTML = `Bem-vindo, ${nome}, ao curso de ${curso}!`;
        // Cria um botão "Sair da conta"
        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);

        // Solicita as notas após o login
        solicitarNotas();
    }
}

function solicitarNotas() {
    while (true) {
        nota1 = parseFloat(prompt("Digite a primeira nota:"));
        nota2 = parseFloat(prompt("Digite a segunda nota:"));
        nota3 = parseFloat(prompt("Digite a terceira nota:"));
        if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
            break; // Sai do loop apenas se todas as notas forem válidas
        }
        alert("Por favor, insira valores numéricos válidos para as notas.");
    }
    CalculaMedia();
}
function CalculaMedia() {
    var media = (nota1 + nota2 + nota3) / 3;
    alert(`Média: ${media.toFixed(2)}`);
}
function sair() {
    alert("Até mais, Volte Sempre!");
    area.innerHTML = "Você saiu!";
}