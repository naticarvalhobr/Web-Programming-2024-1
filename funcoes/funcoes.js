function imprimirOperacao(){
    let a = 2
    let b = 3
    console.log(`Resultado da soma entre ${a} e ${b}: ${a + b}`)
}

imprimirOperacao()

function imprimirOperacaoV2(a, b){ // declarar variáveis que serão utilizadas na função -- faz com que a função seja reutilizada melhor
    console.log(`Resultado da soma entre ${a} e ${b}: ${a + b}`)
}

imprimirOperacaoV2(1, 4)
imprimirOperacaoV2(10, 5)
imprimirOperacaoV2('1', '4') // se passar string, ele concatena -- isso porque a linguagem tem tipagem dinâmica

function imprimirOperacaoV3(a, b, op){
    let c;
    switch (op) {
        case '+':
            c = a + b
            break;
    
        case '-':
            c = a - b
            break;

        case '*':
            c = a * b
            break;

        case '/':
            c = a / b
            break;

        default:
            break;
    }

    console.log(`Resultado da ${op} entre ${a} e ${b}: ${c}`)
}

imprimirOperacaoV3(1, 4, '+')
imprimirOperacaoV3(1, 4, '-')
imprimirOperacaoV3(1, 4, '*')
imprimirOperacaoV3(1, 4, '/')
