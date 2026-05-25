let lista = ["cachorro", "borboleta", "arvore", "bicicleta", "montanha", "estrela", "janela", "foguete", "nuvem", "espelho",'ceu']
let selecionadas = []
for(let i = 0 ; i<lista.length ; i++){
    if(lista[i].length >= 4){
        selecionadas.push(lista[i])
    }
    console.log(selecionadas)
}
