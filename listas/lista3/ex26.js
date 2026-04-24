let dinheiro = parseFloat(prompt('quanto dinheiro é para ser dividido'))
let amigo1 = parseFloat(prompt('quanto dinheiro ele vai receber'))
let amigo2 = amigo1*2
let amigo3 = amigo2*2
let oqsobrou1 = dinheiro/ (amigo1 + amigo2 + amigo3)
document.getElementById('beta').innerHTML = `o seu dinheiro era ${dinheiro} e agora apos dividir o dinheiro é ${oqsobrou1}`