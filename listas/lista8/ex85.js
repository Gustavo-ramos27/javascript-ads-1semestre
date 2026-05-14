let alunos = []
let contador = 0
for(let i = 0; i<4;i++){
    contador++
    alunos.push(prompt('digite nomes de alunos'))
    document.getElementById('resultado').innerHTML = `esses são alunos ${alunos} e a quantidade de alunos é ${contador}`
}