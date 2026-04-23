let mesada = parseFloat(prompt("Digite o valor total da mesada recebida:"));
let economizar = parseFloat(prompt("Digite o valor que deseja economizar:"));
let sobra = mesada - economizar;
document.getElementById('resultado').innerHTML = `O valor que sobra da mesada é: ${sobra}`;

