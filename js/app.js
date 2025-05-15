let totalGeral = 0;
limpar();


function adicionar() {
    // recuperar os valores do nome do produto, da quantidade e do preço do produto.
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0].trim();
    let precoProduto = parseFloat(produto.split("R$")[1].trim());
    let quantidade = parseInt(document.getElementById("quantidade").value);
    
    // validações
    if (!produto || produto.trim() === "" ){
        alert("selecione um produto válido");
        return;
    }
    if(isNaN(quantidade) || quantidade <= 0){
        alert("Digite uma quantidade válida.");
        return;
    }

    // calcular o preço, o nosso subtotal
    let preco = quantidade * precoProduto;
    
    // adicionar o carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco.toFixed(2)}</span>
        </section>`;

    // atualizar o valor total
    totalGeral += preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.innerHTML = `R$${totalGeral.toFixed(2)}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$0.00';
}