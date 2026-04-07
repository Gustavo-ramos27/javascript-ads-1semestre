let degraus = parseFloat(prompt('a altura do degral em cm'))
let altura = parseFloat(prompt('digite a altura desejada em cm'))
let total = altura / degraus
console.log(total)
document.getElementById('resultado').innerHTML = `a altura do degral é ${degraus} a altura a alcançar é ${altura} e o total de degrais que você deve subir é ${Math.round(total)}`