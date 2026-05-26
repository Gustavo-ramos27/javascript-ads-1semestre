let frase = "curso de logica de programacao"
let palavra = frase.split(' ')
let a = []
for (let i = 0 ; i < palavra.length; i++){
a.push(palavra[i][0].toUpperCase() + palavra[i].substring(1))
}console.log(a)