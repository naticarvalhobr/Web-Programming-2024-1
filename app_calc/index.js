const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express() // constante usada para manipular o app web.

app.engine('html', mustacheExpress()) // cria o renderizador.
app.set('view engine', 'html') // quando chamar a função render, vai procurar arquivos html
app.set('views', __dirname + '/src/views') // recebe o endereço da pasta onde estão as views

app.use(express.urlencoded({extended: true})) // decodificar os dados enviados via post

app.use('/', require('./src/routes/calculadoraRoutes')) // usar roteador a partir de qualquer rota que chegar

const PORT = 8080
app.listen(PORT, function(){
    console.log('app rodando na porta ' + PORT)
})
