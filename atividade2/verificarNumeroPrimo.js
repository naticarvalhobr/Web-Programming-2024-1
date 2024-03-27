function verificarNumeroPrimo(n){ // verificar se o numero recebido é primo
    let divisores = 0

    for (let count = 1; count <= n; count++){ // incrementa count até o valor de n e vai dividindo
        if (n % count == 0){
            divisores++
        }
    }

    if (divisores == 2) {
        console.log(`É primo`)
    } else {
        console.log(`Não é primo`)
    }
}

verificarNumeroPrimo(0); //false
verificarNumeroPrimo(1); //false
verificarNumeroPrimo(2); //true
verificarNumeroPrimo(3); //true
verificarNumeroPrimo(7); //true
verificarNumeroPrimo(83); //true
verificarNumeroPrimo(100); //false
verificarNumeroPrimo(991); //true
verificarNumeroPrimo(104729); //true
verificarNumeroPrimo(14348907); //false