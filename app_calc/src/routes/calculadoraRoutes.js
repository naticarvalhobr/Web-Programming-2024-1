const express = require('express')
const router = express.Router() // pega do Express apenas o módulo responsável por criar as rotas
const calcController = require('../controller/calculadoraController')

router.get('/', calcController.index)

router.post('/resultado', calcController.resultado)

module.exports = router
