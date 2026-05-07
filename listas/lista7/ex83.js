let numeros = []
let positivos = []
let negativos = []

for (let i = 0; i < 10; i++) {
    let num = Number(prompt('Digite números inteiros:'))
    numeros.push(num)

    if (num > 0) {
        positivos.push(num)
    } else {
        negativos.push(num)
    }
}

console.log('Todos:', numeros)
console.log('Positivos:', positivos)
console.log('Negativos:', negativos)
