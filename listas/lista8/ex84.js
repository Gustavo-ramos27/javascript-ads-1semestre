let frutas = ['morango','banana','uva','abacaxi','pessego']
let contador = 0
for(let i = 0 ; i < frutas.length; i++){
    contador++
    console.log(contador + frutas[i])
    document.getElementById('resultado').innerHTML += `${contador + frutas[i]} <br>`
}
