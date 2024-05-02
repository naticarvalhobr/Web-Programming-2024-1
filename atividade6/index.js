const express         = require('express')
const mustacheExpress = require('mustache-express')
const app             = express() 

// Configuração do renderizador
app.engine('html', mustacheExpress())  // engine que vai renderizar arquivos .html
app.set('view engine', 'html')         // atribuir valor à propriedade view engine 
app.set('views', __dirname + '/views') // dirname possui o caminho até a pasta atividade6  

// configurar o express para converter o corpo da requisição em um objeto do javascript - decodificação
app.use(express.urlencoded({extended: true}))

app.get('/', function(req, res){
    res.render('index.html') 
})

app.post('/dados', function(req, res){
    let dados = req.body;               // o corpo inteiro da requisição form foi recuperado
    res.render('dados.html', {dados})
})

const PORT = 8080
app.listen(PORT, function(){ 
    console.log('app rodando na porta ' + PORT)
})