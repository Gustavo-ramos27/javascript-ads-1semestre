let valor = parseFloat(prompt("qual é o valor do seu livro"))
let desconto = valor * 0.1
document.getElementById('desconto').innerHTML= `o valor do seu livro é ${valor} e o total a pagar é ${valor - desconto}`