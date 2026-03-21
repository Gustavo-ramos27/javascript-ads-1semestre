let conta = parseFloat(prompt("Digite o valor da conta:"));
let gorjeta = parseFloat(prompt("Digite a porsentagem da gorjeta:"));
let persentoal = gorjeta/100
let valorg = conta * persentoal
let total = valorg + conta
document.getElementById('cont').innerHTML = `o valor da conta ${conta} e o persentoal da gorjeta é ${gorjeta}% e o total da gorjeta é ${valorg} e o todo é ${total}`
