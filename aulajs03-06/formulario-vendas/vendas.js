let res = document.getElementById("res");
let nomeVendedor = document.getElementById("nomeVendedor");
let valorVenda = document.getElementById("valorVenda");
let vendedor = [];
let venda = [];
let desconto = [];

function cadastrar() {
    if (nomeVendedor.value == "" || valorVenda.value == "") {
        window.alert("Erro!!! Nome do vendedor ou Valor não foram preenchidos");
    } else {
        desconto.push(Number(valorVenda.value) * 0.1);
        vendedor.push(nomeVendedor.value);
        venda.push(Number(valorVenda.value));
        res.innerHTML = "";
        res.innerHTML += 
        `<table>
            <tr>
                <th>Id</th>
                <th>Nome do Vendedor</th>
                <th>Valor</th>
                <th>Descono</th>
            </tr>
        </table>`;

    for (i = 0; i < vendedor.length; i++) {
        let o = i + 1;
        res.innerHTML +=
        `<table>
            <tr>
                <td>${o}</td>
                <td>${vendedor[i]}</td>
                <td>R$${venda[i].toFixed(2)}</td>
                <td>R$${desconto[i].toFixed(2)}</td>
            </tr>
        </table>`;
    }
    nomeVendedor.value = '';
    valorVenda.value = '';
    event.preventDefault();
    }
}

function limpar() {
    res.innerHTML = "";
    vendedor = [];
    venda = [];
    desconto = [];
    event.preventDefault();
}

function removerAnterior() {
    desconto.pop();
    vendedor.pop();
    venda.pop();
    res.innerHTML = "";
    res.innerHTML += 
    `<table>
        <tr>
            <th>Id</th>
            <th>Nome do Vendedor</th>
            <th>Valor</th>
            <th>Desconto</th>
        </tr>
    </table>`;

    for (i = 0; i < vendedor.length; i++) {
        let o = i + 1;
        res.innerHTML += 
        `<table>
            <tr>
                <td>${o}</td>
                <td>${vendedor[i]}</td>
                <td>R$${venda[i].toFixed(2)}</td>
                <td>R$${desconto[i].toFixed(2)}</td>
            </tr>
        </table>`;
        }
        event.preventDefault();
}