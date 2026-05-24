let nomes = ["Ana Souza", "Bruno Lima", "Carla Pereira"]
let apelido = []
for(let i = 0 ; i < nomes.length; i++){
    let nome = nomes[i].split(' ')
    apelido.push(nome)
    console.log(apelido[i][0])
}
