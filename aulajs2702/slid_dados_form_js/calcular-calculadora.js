// Função chamada quando o formulário é enviado
function calcular(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Obtém o número inserido e a operação selecionada
    const numero = parseFloat(document.getElementById('numero').value);
    const operacao = document.getElementById('operacao').value;
    let resultado;

    // Verifica se o número inserido é válido
    if (isNaN(numero)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    // Calcula o quadrado ou o cubo baseado na operação escolhida
    if (operacao === "quadrado") {
        resultado = Math.pow(numero, 2); // Calcula o quadrado
    } else if (operacao === "cubo") {
        resultado = Math.pow(numero, 3); // Calcula o cubo
    }

    // Exibe o resultado
    document.getElementById('resultado').textContent = resultado;

    // Exibe o resultado agora que foi calculado
    document.getElementById('resultado-container').style.display = 'block';
}

// Adiciona o evento para chamar a função calcular quando o formulário for enviado
document.getElementById('numeroForm').addEventListener('submit', calcular);
