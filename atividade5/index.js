const express = require('express')
const estoque = require('./src/estoque')
const app = express()

app.get('/adicionar/:id/:nome/:qtd', function (req, res) {
    let id = req.params.id
    let nome = req.params.nome
    let qtd = req.params.qtd
    let p = estoque.criarProduto(id, nome, qtd)
    estoque.adicionarProduto(p)
    res.send(p)
});

app.get('/listar', function (req, res) {
    res.send(estoque.listarProdutos())
})

app.get('/editar/:id/:novaQtd', function(req, res){
    let id = req.params.id
    let novaQtd = req.params.novaQtd

    let prodExist = estoque.buscarProduto(id)
    if (prodExist) {
        prodExist.qtd = novaQtd
        res.send(prodExist)
    } else {
        res.status(404).send('Produto não encontrado')
    }
})

app.get('/remover/:id', function (req, res) {
    let id = req.params.id
    estoque.removerProduto(id)
    res.send(id)
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT)
});

