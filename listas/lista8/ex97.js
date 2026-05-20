let palavras = [ "sol", "lua", "estrela", "nuvem", "chuva", "vento", "neve", "raio", "arco", "tempestade"];
let a = 'a'
let contador = 0
for(let i = 0 ; i < palavras.length; i++){
    let palavramenor = palavras[i].toLowerCase()
    if(palavras[i][0].includes('a')){
        contador++
    }
}console.log(contador)