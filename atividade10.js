console.log ("Escreva um programa que leia o peso e a altura de uma pessoa e calcule seu IMC, informando se está abaixo do peso, no peso normal, acima do peso ou obeso.")

peso = 100
altura = 1.80
imc = (peso / (altura*altura))
console.log (imc)

if (imc < 18.5 ) {
    console.log ("Magreza")
}
else if (imc > 18.5 && imc <= 24.9){
    console.log ("Normal")
}
else if (imc >=25 && imc < 29.9) {
    console.log ("sobrepeso")
}
else if (imc >30 && imc < 34.9) {
    console.log ("Obesidade grau |")
 }
 else if (imc >=35 && imc < 39.9){
    console.log ("Obesidade grau ||")
 }
 else if (imc > 40) { 
    console.log ("Obesidade grau |||")
 }