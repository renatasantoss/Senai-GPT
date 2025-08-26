// /// Exercício 1

// let idade = prompt("Qual é a idade?");

// if (idade >= 18) {

//     alert("Parabéns! Você é maior de idade.");

// }   else {

//     alert("Erro")

// }

/// Exercício 2

// let número = prompt("Digite um número.")

// if (número > 0) {

//     alert ("O número é positivo.")

// }
//     else { 

//     alert("O número é negativo")

//     }

 /// Exercício 3

//  let nota = prompt("Digite a nota do aluno");

//  if (nota >= 60) {

//     alert("Parabéns! Você está aprovado.");

//  }
//     else {

//     alert("Você está reprovado.");

//     }

 /// Exercício 4

//  let número = prompt("Digite um número.");

//  if (número > 0) {

//     alert ("O número é positivo.");

//  } else {
  
// if (número == 0) {

//     alert ("O número é zero");

// } else {

//     alert("O número é negativo");

// } 
// }

 /// Exercício 5

// let idade = prompt("Digite sua idade");

//     if (idade > 0 && idade <= 12) {

// alert("Você é uma criança.");

// } else {

//     if (idade > 12 && idade <= 17) {

// alert("Você é um adolecente");
        

// } else {

//     if (idade >= 18) {

// alert("Você é um adulto"); 

//     }

// }
// }

 /// Exercício 6

// let número = prompt("Digite um número.");

//     if (número % 2 == 0) {

// alert("O número é par")

// } else {

// alert("O número é ímpar.")

// }

 /// Exercício 1 - Intermediário

 let número1 = parseFloat(prompt("Digite um número."));
 let número2 = parseFloat(prompt("Digite outro número."));
 let operacao = prompt("Digite a operação (+, -, *, /):");

 let resultado

    if (operacao === "+") {
        resultado = número1 + número2
    } else if  (operacao === "-") {
        resultado = número1 - número2
    } else if  (operacao === "*") {
        resultado = número1 * número2
    } else if (operacao === "/") {
        resultado = número1 / número2

    }

    alert("Resultado: " + resultado);

 /// Exercício 2 - Intermediário
