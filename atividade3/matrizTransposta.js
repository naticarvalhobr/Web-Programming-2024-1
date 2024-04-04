function transporMatriz(A){
    // Primeiro for percorre as linhas, o segundo for percorre colunas
    let mOriginal = "";
    for (let i = 0; i < A.length; i++){ // roda o vetor até o tamanho dele completo
        for (let j = 0; j < A[0].length; j++) { // como é uma matriz quadrada (nr de colunas é sempre igual), pegou a primeira linha pra descobrir o tamanho das colunas
            mOriginal += A[i][j] + ' ';
        }
        mOriginal += '\n';
    }
    console.log(mOriginal);

    let mTransposta = "";
    for (let j = 0; j < A[0].length; j++) {
        for (let i = 0; i < A.length; i++) {
            mTransposta += A[i][j] + ' ';
        }
        mTransposta += '\n';
    }
    console.log(mTransposta);
}

const A = [
    [1, 2], 
    [3, 4], 
    [5, 6],
]

transporMatriz(A);
