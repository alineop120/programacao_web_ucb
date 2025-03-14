let simulacoes = []; // Armazenar todas as simulações

function cadastrar() {
    const valorEmprest = parseFloat(document.getElementById('valorEmprest').value);
    const txJurosA = parseFloat(document.getElementById('txJurosA').value);
    const prazoEmprestM = parseInt(document.getElementById('prazoEmprestM').value);

    // Validar entradas
    if (isNaN(valorEmprest) || isNaN(txJurosA) || isNaN(prazoEmprestM)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Calcular juros compostos
    const txJurosMensal = txJurosA / 100 / 12;
    const valorTotal = valorEmprest * Math.pow(1 + txJurosMensal, prazoEmprestM);
    const valorParcela = valorTotal / prazoEmprestM;

    // Criar objeto de simulação
    const simulacao = {
        valorEmprest: valorEmprest.toFixed(2),
        txJurosA: txJurosA,
        prazoEmprestM: prazoEmprestM,
        valorTotal: valorTotal.toFixed(2),
        valorParcela: valorParcela.toFixed(2)
    };

    // Adicionar simulação ao array
    simulacoes.push(simulacao);

    // Exibir resultados
    exibirResultados();
}

function exibirResultados() {
    // Gerar a tabela com todas as simulações
    let tabelaHTML = `
        <table>
            <tr>
                <th>Valor do Empréstimo</th>
                <th>Taxa de Juros Anual</th>
                <th>Prazo do Empréstimo (meses)</th>
                <th>Valor Total</th>
                <th>Valor da Parcela</th>
            </tr>
    `;

    // Adicionar cada simulação à tabela
    simulacoes.forEach(simulacao => {
        tabelaHTML += `
            <tr>
                <td><p>R$ ${simulacao.valorEmprest}</p></td>
                <td>${simulacao.txJurosA}%</td>
                <td>${simulacao.prazoEmprestM} meses</td>
                <td>R$ ${simulacao.valorTotal}</td>
                <td>R$ ${simulacao.valorParcela}</td>
            </tr>
        `;
    });

    tabelaHTML += `</table>`;
    document.getElementById('res').innerHTML = tabelaHTML;
}

function limpar() {
    simulacoes = []; // Limpar todas as simulações
    document.getElementById('valorEmprest').value = '';
    document.getElementById('txJurosA').value = '';
    document.getElementById('prazoEmprestM').value = '';
    document.getElementById('res').innerHTML = '';
}

function removerUltimaSimulacao() {
    simulacoes.pop(); // Remover a última simulação
    exibirResultados();
}
