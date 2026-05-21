let lista = ["elefante", "borboleta", "chocolate", "tartaruga", "biblioteca", "computador", "dinossauro", "quadro",'sera']
let maior = ''
let menor = lista[1]
for(let i = 0; i < lista.length ; i++){
    if(lista[i].length > maior.length){
        maior = lista [i]
    }
    if(lista[i].length < menor.length){
        menor = lista[i]
    }
}
console.log(maior)
console.log(menor)