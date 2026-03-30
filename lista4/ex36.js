let a = parseFloat(prompt('digite o lado A'))
let b = parseFloat(prompt('digite o lado b'))
let c = parseFloat(prompt('digite o lado c'))
let volume = a* b * c 
document.getElementById('resultado').innerHTML = `os lados foram ${a} ${b} ${c} e o seu volume é ${volume}`