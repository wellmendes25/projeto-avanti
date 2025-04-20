
const produtos = [
    { imagem: "/modelo.png", titulo: "Produto 1", preco: "R$ 99,90", descricao: "Descrição do produto 1"},
    { imagem: "/modelo.png", titulo: "Produto 2", preco: "R$ 149,90", descricao: "Descrição do produto 2" },
    { imagem: "/modelo.png", titulo: "Produto 3", preco: "R$ 199,90", descricao: "Descrição do produto 3" },
    { imagem: "/modelo.png", titulo: "Produto 4", preco: "R$ 89,90", descricao: "Descrição do produto 4" },
    { imagem: "/modelo.png", titulo: "Produto 5", preco: "R$ 129,90", descricao: "Descrição do produto 5" },
    { imagem: "/modelo.png", titulo: "Produto 6", preco: "R$ 159,90", descricao: "Descrição do produto 6" },
    { imagem: "/modelo.png", titulo: "Produto 7", preco: "R$ 179,90", descricao: "Descrição do produto 7" },
    { imagem: "/modelo.png", titulo: "Produto 8", preco: "R$ 119,90", descricao: "Descrição do produto 8" },
    { imagem: "/modelo.png", titulo: "Produto 9", preco: "R$ 139,90", descricao: "Descrição do produto 9" },
    { imagem: "/modelo.png", titulo: "Produto 10", preco: "R$ 189,90", descricao: "Descrição do produto 10" },
];

function calcularParcelado(preco){
    const valor = parseFloat(preco.replace("R$", "").replace(",","."));
    const valorParcelado = (valor/10).toFixed(2).replace(".", ",");
    return `10x de R$ ${valorParcelado}`;
}

produtos.forEach(produto => {
    produto.parcelado = calcularParcelado(produto.preco);
});

export default produtos;