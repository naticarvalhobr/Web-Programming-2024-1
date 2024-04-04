const express = require('express')
const app = express() // criar uma aplicação do tipo express
const mat = require('./util/matematica')

/*app.get('/', function(req, res){
    res.send('Pagina inicial')
}) // parâmatros: endereço que a função atende, função a ser acionada

app.get('/ola', function(req, res){
    res.send('Ola, mundo!')
})

app.get('/ola/:n', function(req, res){ // o parâmetro :n entra na requisição para recuperar o dado que o usuário digitar
    let n = req.params.n
    res.send('Ola, mundo!' + n)
})*/

app.get('/verificar-numero-primo/:n', function(req, res){
    let n = req.params.n
    let ehPrimo = mat.verificarNumeroPrimo(n)
    res.send(ehPrimo)
})

const PORT = 8081 // declaração da porta a ser usada
app.listen(PORT, function(){
    console.log('App rodando na porta ' + PORT)
}) // escuta requisições da porta declarada