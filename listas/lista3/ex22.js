let vb = parseFloat(prompt('quantos sorvetes de baunilha foram vendidos'))
let vc = parseFloat(prompt('quantos soervets de chocolate foram vendidos'))
let pb = parseFloat(prompt('valor do sorvete de baunilha'))
let pc = parseFloat(prompt("valor do sorvete de chocolate "))
let tc = parseFloat(vc * pc)
let tb = parseFloat(vb * pb)
let tudo = parseFloat(tc + tb)
document.getElementById('vendas').innerHTML = `o valor total de vendas é ${tudo}`
