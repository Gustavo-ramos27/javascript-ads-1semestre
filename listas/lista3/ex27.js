let flor = parseFloat(prompt("digite a quantidade de flores que serao plantadas no primeito dia"))
let d2 = flor * 2
let d3 = flor * 3
let d4 = flor * 4
let d5 = flor * 5
let total = flor + d2 + d3 + d4 + d5
document.getElementById('flores').innerHTML = `as flores plantadas nos dias  ${flor} ${d2} ${d3} ${d4}  
 ${d5} e o total de flores é ${total}`