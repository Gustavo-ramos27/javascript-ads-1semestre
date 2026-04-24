let produto1 = parseFloat(prompt('digite o valor do produto'))
let produto2 = parseFloat(prompt('digite o valor do produto'))
let produto3 = parseFloat(prompt('digite o valor do produto'))
let soma = produto1 + produto2 + produto3
document.getElementById('resultado').innerHTML = `o valor total da compra é ${soma} e com 10% de desconto é ${soma - soma * 0.1} e com 20% é ${soma - soma * 0.2} e com 30% é ${soma - soma * 0.3} e o valor com 50% é ${soma - soma * 0.5}`