let nomes =  ["Rodrigo", "Fernanda", "Luiz", "Patricia","Gustavo"]
let apelidos = []
for(let i = 0 ; i < nomes.length; i++){
    apelidos.push(nomes[i].substring(0,3) + nomes[i].length)
    console.log(apelidos)
}