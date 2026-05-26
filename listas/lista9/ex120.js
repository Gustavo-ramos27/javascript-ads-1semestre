let palavras = ["casa", "árvore", "computador", "livro", "música", "cidade", "amigo", "trabalho", "natureza", "felicidade", "sol", "lua", "estrela", "mar", "montanha", "rio", "flor", "pássaro", "chuva", "vento", "fogo", "terra", "água", "ar", "tempo", "amor", "paz", "guerra", "vida", "morte", "sonho", "esperança", "alegria", "tristeza", "coragem", "medo", "verdade", "mentira", "justiça", "liberdade"]
let impares = []
let meio = []
for(let i = 0 ; i < palavras.length; i++){
    if(palavras[i].length%2 !== 0){
        impares.push(palavras[i])
    }
    console.log(impares)
}