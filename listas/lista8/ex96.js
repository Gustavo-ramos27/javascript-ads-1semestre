let palavras = [ "sol", "lua", "estrela", "nuvem", "chuva", "vento", "neve", "raio", "arco", "tempestade"];
let maior = ''
for(let i = 0 ; i < palavras.length ; i++){
    if(palavras[i].length > maior.length){
        maior = palavras[i]
    }
    document.getElementById('resultado').innerHTML = maior
}