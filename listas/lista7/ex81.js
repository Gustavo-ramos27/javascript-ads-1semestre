let numeros = []
for (let i = 0; i <= 20; i++) {
    numeros.push(i)
    if (numeros[i] % 2 == 0) {document.getElementById('resultado').innerHTML += `<strong>${numeros[i]} é par</strong><br>`}
    else {document.getElementById('resultado').innerHTML += `<strong>${numeros[i]} é impar</strong><br>`}
}