//Aula 3
//Cadastro de indivíduos

let nome = "Juliana"
let cpf = 123

let nome1 = "Natalia"
let cpf1 = 456

console.log('Cadastro: ${nome} - ${cpf}')
console.log('Cadastro: ${nome1} - ${cpf1}')


let pessoa1 = { //variavel do objeto pode-se infinitas propriedades. Nesse exemplo "nome" e "cpf" são essas propriedades do object
    nome: "Juliana",
    cpf: 123,
    endereco: { //é possível que uma propriedade seja um object dentro de um object
        nomeRua: "Faria Lima",
        cep: 1333 
    }
}

let pessoa2 = {
    nome: "Natalia",
    cpf: 456
}

console.log('Cadastro: ${pessoa1.nome} - ${pessoa1.cpf}')
console.log('Cadastro: ${pessoa2.nome} - ${pessoa2.cpf}')

for(let key in pessoa1){ //o for in a gente consegue recuperar quais são as propriedades de um object
    console.log(key)
}

for(let key in pessoa1){ //o for in também consegue recuperar a informação da propriedade
    console.log(key + ' - ' + pessoa1[key])
}


//declaração de array. Pode ser const ou let. Array é também um objeto, onde o nome da propriedade são os índices.

const arr = [11, 3, 7, 99, 15]
const arr1 = [11, "tres", 7, 99, {numero:15}, [12, 17]] //Array de arrays

for(let i = 0; i < arr.length; i++){ //percorrer um array
    console.log(i + ' - ' + arr[i])
}

for(let key in arr){ //Array pode ser visto como um objeto
    console.log(key + ' - ' + arr[key])
}


//Matriz

let A = [[1,2], [3,4]] // [linha,coluna]

A[0] [1] //contagem a partir de 0. Nesse caso "1ºlinha, 2ªcoluna"