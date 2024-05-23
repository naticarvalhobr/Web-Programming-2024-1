const calc = require('../calculadora/calculadora')

function index(req, res){
    let erro_valor = req.query.erro_valor // tudo que vem de variável na URL estão dentro de "query"
    // quando dá erro, erro_valor é true. Senão, é undefined.
    res.render('index.html', {erro_valor})
}

function resultado(req, res){
    let v1 = Number(req.body.v1)
    let v2 = Number(req.body.v2)
    let op = req.body.op
    let v3
    let nmOp = calc.nomeOperador(op)

    if(isNaN(v1) || isNaN(v2)){ // se v1 ou v2 não forem numeros
        res.redirect('/?erro_valor=true') // redireciona o usuário para a pagina inicial. A interrogação mostra que o que vem depois é informação adicional da url
    } else {
        v3 = calc.calcular(v1, v2, op)
        res.render('resultado.html', {v1, v2, op, v3, nmOp})
    }
}

module.exports = {
    index,
    resultado
}