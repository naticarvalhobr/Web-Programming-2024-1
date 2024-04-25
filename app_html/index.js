const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express() // funcionalidades do aplicativo dentro da variável app

app.engine('html', mustacheExpress()) // explicitando qual o renderizador vai utilizar
app.set('view engine', 'html')
app.set('views', __dirname + '/views') // toda vez que quiser renderizar um arquivo html, deve procurar na pasta /views
// __dirname é o caminho até a pasta principal que está trabalhando

app.get('/', function(req, res){
    //res.send('Pagina Inicial') // metodo de resposta para devolver algo para o usuário
    /*let html = '<html>`\
    <head></head>\
    <body>\
        <h1>Título</h1>\
        <h3>Subtítulo</h3>\
        <p>Parágrafo</p>\
    </body>\
    </html>'*/
    let nome = "Nat"
    let data = new Date()
    res.render('index.html', {nome, data}) // essa parte das variáveis nome e data só funciona se abrir com o endereço da aplicação, e não com o link direto do html
})

app.get('/contato', function(req, res){
    res.render('contato.html')
})

const PORT = 8080
app.listen(PORT, function(){ // se der tudo certo na chamada da porta, deve aparecer a mensagem abaixo
    console.log('app rodando na porta ' + PORT)
})

//"npm install mustache-express@1.3.2" é o renderizador html


app.post('/dados', function(req, res){
    let nome = req.params // para recuperar o dado nome
})