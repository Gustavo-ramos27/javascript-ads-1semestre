let palavra1 = prompt('digite uma palavra ')
let palavra2 = prompt('digite uma palavra')
if(palavra1.length > palavra2.length){
    console.log(palavra1)
} else if(palavra1.length < palavra2.length){
    console.log(palavra2)
}else{
    console.log('as duas sao iguais')
}