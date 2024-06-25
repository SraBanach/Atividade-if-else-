//console.log ("Crie um programa que simule um jogo de adivinhação, onde o usuário tem que adivinhar um número")
//console.log ("entre 1 e 100 gerado aleatoriamente pelo programa, com dicas de "maior" ou "menor" após cada palpite.")

var numpalpite = 10
var numreal = 10 

if (numpalpite == numreal) {
    console.log ("Parabens você acertou o numero!")
}
else if (numpalpite > numreal) {
    console.log ("Não foi dessa vez, tente novamente... dessa vez um numero menor ;(")
} 
else if (numpalpite < numreal) { 
console.log ("Não foi dessa vez, tente um numero maior dessa vez ;( ")
}
