const frases = ["O sol nasceu bonito hoje.", "Eu gosto de programar em JavaScript.", "A natureza é muito bonita.", "Aprender é uma jornada sem fim."];

console.log(frases[0]);
console.log(frases[1]);
console.log(frases[2]);
console.log(frases[3]);
console.log(frases[0].length);
console.log(frases[1].length);
console.log(frases[2].length);
console.log(frases[3].length);

for (let i = 0; i < frases.length; i++) {
    let contador = 0;
    for (let j = 0; j < frases[i].length; j++) {  // era: frases[i].length sem comparador, e incrementava i em vez de j
        if (frases[i][j] == " ")                   // era: frases[j] em vez de frases[i][j]
            contador++;
    }
    console.log(contador);  // estava resetando contador antes do log
}