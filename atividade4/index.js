const express = require('express')
const app = express() // criar uma aplicação do tipo express
const calc = require('./util/calculadora')

app.get('/somar/:a/:b', function(req, res){
    let a = req.params.a
    let b = req.params.b
    let result = calc.somar(a, b)
    res.send("" + result)
})

app.get('/subtrair/:a/:b', function(req, res){
    let a = req.params.a
    let b = req.params.b
    let result = calc.subtrair(a, b)
    res.send("" + result)
})

app.get('/multiplicar/:a/:b', function(req, res){
    let a = req.params.a
    let b = req.params.b
    let result = calc.multiplicar(a, b)
    res.send("" + result)
})

app.get('/dividir/:a/:b', function(req, res){
    let a = req.params.a
    let b = req.params.b
    let result = calc.dividir(a, b)
    res.send("" + result)
})

const PORT = 8081 // declaração da porta a ser usada
app.listen(PORT, function(){
    console.log('App rodando na porta ' + PORT)
})