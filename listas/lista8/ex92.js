let emails = ["ana@gmail.com", "carlos@yahoo.com", "julia@hotmail.com"]
for(let i = 0 ; i < emails.length; i++){
let emailatual = emails[i]
let arroba = emailatual.indexOf('@')
let resto = emailatual.substring(0 , arroba)
console.log(resto)
}