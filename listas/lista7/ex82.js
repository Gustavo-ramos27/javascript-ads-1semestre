let notas = []
let media = 0
for (i =0 ; i <5 ; i++){
    notas.push(parseFloat(prompt('digite notas dos alunos')))
    media += notas[i] / 5
}document.getElementById('resultado').innerHTML = `as notas foram ${notas} e a media delas é ${media}`