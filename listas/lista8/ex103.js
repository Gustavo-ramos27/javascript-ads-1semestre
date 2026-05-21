let lista = ["elefante", "borboleta", "chocolate", "tartaruga", "biblioteca", "computador", "dinossauro", "quadro",'sera']
let curta = []
let media = []
let longa = []
for(let i = 0 ; i < lista.length; i++){
    if(lista[i].length <= 4){
        curta.push(lista[i])
    }else if(lista[i].length >=5 && lista[i].length <= 7){
        media.push(lista[i])
    }else if(lista[i].length >=8){
        longa.push(lista[i])
    }
}console.log(curta)
console.log(media)
    console.log(longa)