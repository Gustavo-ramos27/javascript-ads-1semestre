let palavras = [ "sol", "lua", "estrela", "nuvem", "chuva", "vento", "neve", "raio", "arco", "tempestade"];
let escolhidas = []
for(let i = 0 ; i< palavras.length; i++){
    if(palavras[i].length%2 == 0 ){
        escolhidas.push(palavras[i])
    }
}document.getElementById('resultado').innerHTML = escolhidas
