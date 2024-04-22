let produtos = []

function criarProduto(id, nome, qtd) {
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    return p
}

function adicionarProduto(p) {
    produtos.push(p)
}

function listarProdutos() {
    return produtos
}

function buscarProduto(id) {
    return produtos.find(p => p.id === id)
}

function removerProduto(id) {
    produtos = produtos.filter((p) => {
        let x = p.id != id
        return x
    });
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    buscarProduto,
    removerProduto
};