let lista = ["cachorro", "borboleta", "arvore", "bicicleta", "montanha", "estrela", "janela", "foguete", "nuvem", "espelho"]
let letra = 'b'
let palavra = []
for(let i = 0 ; i < lista.length; i++){
    let listamenor = lista[i].toLowerCase()
if(listamenor[0].includes(letra)){
    palavra.push(lista[i])
}
}console.log(palavra)
