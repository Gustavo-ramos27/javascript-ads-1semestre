let valor_numero1 = parseFloat(prompt('digite o primeiro valor'));
let valor_numero2 = parseFloat(prompt('digite o segundo valor'))
document.getElementById('vamo').innerHTML = ('os numeros sao ') + valor_numero1 + (' e ') + valor_numero2
document.getElementById('começa').innerHTML = ('a soma dos numeros ') + valor_numero1 + (' e ') + valor_numero2 + (' e ') + (valor_numero1 + valor_numero2)
document.getElementById('la').innerHTML = ("a subitraçao dos numeros ") + valor_numero1 + (' e ') + valor_numero2 + (' e ') + (valor_numero1 - valor_numero2)
document.getElementById('uno').innerHTML = (" a multiplicaçao dos numeros ") + valor_numero1 + (' e ') + valor_numero2 + (" e ") + valor_numero1 * valor_numero2
document.getElementById('dos').innerHTML = ('a divisao dos numeros ') + valor_numero1 + (' e ') + valor_numero2 + (' e ') + valor_numero1 / valor_numero2
document.getElementById('trinca').innerHTML = ('a media dos numeros ') + valor_numero1 + (' e ') + valor_numero2 + (" e ") + (valor_numero1 + valor_numero2) / 2