function verificarNumeroPrimo(n){ // verificar se o numero recebido é primo
    let divisores = 0

    for (let count = 1; count <= n; count++){ // incrementa count até o valor de n e vai dividindo
        if (n % count == 0){
            divisores++
        }
    }

    if (divisores == 2) {
        return true
    } else {
        return false
    }
}

module.exports = {
    verificarNumeroPrimo
}