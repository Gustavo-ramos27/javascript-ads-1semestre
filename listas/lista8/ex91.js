let nomes = ["maria", "joao", "sabrina", "rafael","Carlos", "Fernanda", "Thiago", "Leticia",'gustavo','ramom']
let verificador = prompt('digite um nome')
let verificador2 = nomes.includes(verificador)
if(verificador2){
document.getElementById('resultado').innerHTML = `esse nome "${verificador}" esta na lista`
}else{
    document.getElementById('resultado').innerHTML = `esse nome "${verificador}" não esta na lista `
}