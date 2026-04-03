let raio = parseFloat(prompt("Digite o raio da esfera: "))
let area = 4 * Math.PI * Math.pow(raio,2)
let volume = (4 * Math.PI * Math.pow(raio,3)) / 3
document.getElementById('resultado').innerHTML = `a area da esfera é ${area} e esta é o volume da esfera ${volume}`