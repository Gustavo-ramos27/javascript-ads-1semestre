let palavras = ['so sei que nada sei', 'sei que ao saber de nada tenho que estudar', 'Deus me ajuda a ser menos burro por favor'];

for (let i = 0; i < palavras.length; i++) {
  let frase = palavras[i];
  let maiusculo = frase.toUpperCase();
  let numCaracteres = frase.length;
  let primeiraPalavra = frase.split(' ')[0]; // split retorna array, [0] pega o primeiro

  document.getElementById('resultado').innerHTML +=
    `Frase: ${frase} | Maiúsculo: ${maiusculo} | Caracteres: ${numCaracteres} | Primeira palavra: ${primeiraPalavra} <br>`;
}
