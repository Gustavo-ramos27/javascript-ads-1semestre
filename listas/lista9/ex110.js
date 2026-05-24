let frase = 'javascript'
let nova = ''
let vogais = ['a','e','i','o','u']
for(let i = 0 ;i< frase.length ; i++){
    if(vogais.includes(frase[i])){
        nova += '*'
    }else{
      nova += frase[i]
    }
}console.log(frase)
console.log(nova)
