let lista = ["banana", "abacaxi", "laranja", "manga", "uva", "maracuja"]
let palavraVencedora = ''
let maiorContagem = 0

for(let i = 0; i < lista.length; i++){
    let palavraAtual = lista[i]
    let contagem = 0

    for(let j = 0; j < palavraAtual.length; j++){
        if(palavraAtual[j] === 'a'){
            contagem++
        }
    }

    if(contagem > maiorContagem){
        maiorContagem = contagem
        palavraVencedora = palavraAtual
    }
}

console.log('Palavra: ' + palavraVencedora)
console.log('Quantidade de as: ' + maiorContagem)