let valor100kw = parseFloat(prompt('valor do salario minimo')) / 7
let gastocasa = parseFloat(prompt('quantos quilowats foram gastos em sua casa'))
let valorkw = valor100kw / 100
let reisgastos = valorkw * gastocasa
let comdesconto = reisgastos - reisgastos * 0.1
document.getElementById('resultado').innerHTML = `o salario minimo é ${valor100kw * 7} <br> o valor da quantidade gasta em kw é ${gastocasa} <br> e o valor por kw é ${valorkw} <br> e o valor gasto é ${reisgastos}<br> e com desconto de 10% é ${comdesconto}`
console.log(valor100kw)
let dia = prompt('digite o valor do dia (0-6)')
if(dia == 0 ){   
    console.log('domingo')
}else if(dia == 1){
    console.log('é segunda')
}
else if(dia == 2){
    console.log('é terça')
}
else if(dia == 3){
    console.log('é quarta')
}
else if(dia == 4){
    console.log('é quinta')
}
else if(dia == 5){
    console.log('é sexta')
}
else if(dia == 6){
    console.log('é sabado')
}
else{
    console.log('não é um dia')
} 
