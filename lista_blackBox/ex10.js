// Exercício 10: Frequência de números na lista
// TODO: Liste 10 nums, conte ocorrências, mostre mais frequente

let lista = []; // preencha 10 nums
let frequencia = {};
// seu código... use objeto para contar

let maisFreq = '';
let maxCont = 0;
for (let num in frequencia) {
  if (frequencia[num] > maxCont) {
    maxCont = frequencia[num];
    maisFreq = num;
  }
}

document.getElementById('resultado').innerHTML = `Mais frequente: ${maisFreq} (${maxCont} vezes)<br>Frequências: ${JSON.stringify(frequencia)}`;
console.log('Frequência:', frequencia);
