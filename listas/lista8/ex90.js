let lista = ["maria", "joao", "sabrina", "rafael"]
let vip = []

for(let i = 0 ; i < lista.length; i++){
    let palavra = lista[i][0].toUpperCase() 
    let palavra2 = lista[i].substring(1)
    vip.push(palavra + palavra2)
    console.log(palavra)
console.log(palavra2)
   
} document.getElementById('resultado').innerHTML = vip 

