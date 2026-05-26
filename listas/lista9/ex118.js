let palavra = ["casa", "árvore", "computador", "livro", "música", "cidade", "amigo", "trabalho", "natureza", "felicidade", "sol", "lua", "estrela", "mar", "montanha", "rio", "flor", "pássaro", "chuva", "vento", "fogo", "terra", "água", "ar", "tempo", "amor", "paz", "guerra", "vida", "morte", "sonho", "esperança", "alegria", "tristeza", "coragem", "medo", "verdade", "mentira", "justiça", "liberdade"]
let escolhidas = []
for(let i = 0 ; i<palavra.length ; i++){
    if(palavra[i].indexOf('ar') !== -1 ){
        escolhidas.push(palavra[i])
    }
    console.log(escolhidas)
}