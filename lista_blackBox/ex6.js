// Exercício 6: Buscar valor (prompt para buscar)
// TODO: Leia número para buscar, mostre índice ou "não encontrado"

let lista = []; // preencha
let buscar = parseFloat(prompt("Número a buscar:"));
let posicao = -1;
// seu código...

if (posicao !== -1) {
  document.getElementById('resultado').innerHTML = `Encontrado na posição ${posicao}`;
} else {
  document.getElementById('resultado').innerHTML = "Não encontrado";
}
console.log('Posição:', posicao);
