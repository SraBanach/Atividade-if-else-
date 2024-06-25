console.log (" Faça um programa que verifique se um triângulo é equilátero, isósceles ou escaleno com base nos comprimentos de seus lados.")
// Um triângulo pode ser classificado como:
//Equilátero: todos os lados possuem a mesma medida.
//Isósceles: dois lados possuem a mesma medida.
//Escaleno: todos os lados possuem medidas diferentes
lado1 = 2
lado2 = 3
lado3 = 2

if (lado1 == lado2 && lado2 == lado3) {
        console.log ("triangulo Equilátero")
    }

else if (lado1 != lado2 && lado2 == lado3 || lado1 == lado2 && lado2 != lado3) {
        console.log ("triangulo Isósceles")  
        }

else if (lado1 != lado2 && lado2 != lado3) {
    console.log ("triangulo escaleno")
}