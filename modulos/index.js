const matriz = require('./util/matriz') // carrega o módulo declarado no arquivo matriz

let B = [
    [1, 2], 
    [3, 4], 
    [5, 6],
]

matriz.transporMatriz(B)

const calc = require('./util/calculadora')

console.log('PI = ' + calc.PI)
console.log('2 + 3 = ' + calc.somar(2, 3))