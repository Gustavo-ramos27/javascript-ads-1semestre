let base1 = parseFloat(prompt('digite a primeira base'))
let base2 = parseFloat(prompt('digite a segunda base'))
let altura = parseFloat(prompt('digite a altura'))
let somb = base1 + base2
let area = somb * altura / 2 
document.getElementById('resultado ').innerHTML = `o valor area do trapesio é ${area}`