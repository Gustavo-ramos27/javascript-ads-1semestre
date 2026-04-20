// Exercício 9: Matriz 3x3 - soma de linhas
// TODO: Crie matriz[3][3], preencha prompt, mostre soma linha 0,1,2

let matriz = [[],[],[]];
// seu código...

let soma0 = matriz[0][0] + matriz[0][1] + matriz[0][2];
let soma1 = matriz[1][0] + matriz[1][1] + matriz[1][2];
let soma2 = matriz[2][0] + matriz[2][1] + matriz[2][2];

document.getElementById('resultado').innerHTML = `Soma linha 0: ${soma0}<br>Soma linha 1: ${soma1}<br>Soma linha 2: ${soma2}`;
console.log('Matriz:', matriz, 'Somadas:', soma0, soma1, soma2);
