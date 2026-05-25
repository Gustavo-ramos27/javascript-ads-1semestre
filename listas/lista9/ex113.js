let cursos = ["Tecnologia Informação", "Ciência Dados", "Desenvolvimento Web"]

for(let i = 0 ; i < cursos.length; i++){
    let sigla = ''
    let palavras = cursos[i].split(' ')
for(let j = 0 ; j < palavras.length ; j++){
    let palavras2 = palavras[j]
        sigla += palavras2[0]
}console.log(sigla)
}
