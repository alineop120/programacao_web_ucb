// Função chamada quando o formulário é enviado
function calcularParcelamento(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Obtendo os valores inseridos pelo usuário
    const valorCompra = parseFloat(document.getElementById('valorCompra').value);
    const numeroParcelas = parseInt(document.getElementById('numeroParcelas').value);
    const taxaJuros = parseFloat(document.getElementById('taxaJuros').value) / 100;

    // Verificando se os valores são válidos
    if (isNaN(valorCompra) || isNaN(numeroParcelas) || isNaN(taxaJuros)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Calculando a parcela utilizando a fórmula de juros compostos
    const fatorJuros = Math.pow(1 + taxaJuros, numeroParcelas);
    const valorParcela = (valorCompra * fatorJuros) / numeroParcelas;

    // Calculando o valor total a ser pago
    const valorTotal = valorParcela * numeroParcelas;

    // Exibindo os resultados
    document.getElementById('valorParcela').textContent = valorParcela.toFixed(2);
    document.getElementById('valorTotal').textContent = valorTotal.toFixed(2);

    // Exibindo o resultado
    document.getElementById('resultado-parcelamento').style.display = 'block';
}

// Adicionando o evento para o formulário
document.getElementById('parcelamentoForm').addEventListener('submit', calcularParcelamento);
