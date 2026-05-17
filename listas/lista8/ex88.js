let nomes = ["Carlos", "Fernanda", "Thiago", "Leticia"]
for(let i = 0; i < nomes.length; i++){
    document.getElementById('resultado').innerHTML += nomes[i][0]
    console.log(nomes[i][0])
}