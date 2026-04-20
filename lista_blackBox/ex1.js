// Exercício 1: Soma dos elementos de uma lista
// TODO: Crie array com 5 números (prompt), some e mostre

let lista = [];
for(let i = 0; i < 5; i++) {
    let num = parseFloat(prompt(`Digite o número ${i+1}:`));
    lista.push(num);
}
let soma = lista.reduce((acc, num) => acc + num, 0);
document.getElementById('resultado').innerHTML = `Soma da lista: ${soma}`;
console.log(lista, soma);
