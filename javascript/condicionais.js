// /// Exercício 1
function exercicio01() {

    let idade = prompt("Qual é a idade?");

    if (idade >= 18) {

        alert("Parabéns! Você é maior de idade.");

    } else {

        alert("Erro! Você é menor de idade")

    }

    adicionarlog();

}

/// Exercício 2
function exercicio02() {

    let número = prompt("Digite um número.")

    if (número > 0) {

        alert("O número é positivo.")

    }
    else {

        alert("O número é negativo")

    }

    adicionarlog();

}

/// Exercício 3
function exercicio03() {

    let nota = prompt("Digite a nota do aluno");

    if (nota >= 60) {

        alert("Parabéns! Você está aprovado.");

    }
    else {

        alert("Você está reprovado.");

    }

    adicionarlog();

}

/// Exercício 4
function exercicio04() {

    let número = prompt("Digite um número.");

    if (número > 0) {

        alert("O número é positivo.");

    } else {

        if (número == 0) {

            alert("O número é zero");

        } else {

            alert("O número é negativo");

        }
    }

    adicionarlog();

}

/// Exercício 5
function exercicio05() {

    let idade = prompt("Digite sua idade");

    if (idade > 0 && idade <= 12) {

        alert("Você é uma criança.");

    } else {

        if (idade > 12 && idade <= 17) {

            alert("Você é um adolecente");


        } else {

            if (idade >= 18) {

                alert("Você é um adulto");

            }

        }
    }

    adicionarlog();

}

/// Exercício 6
function exercicio06() {

    let número = prompt("Digite um número.");

    if (número % 2 == 0) {

        alert("O número é par")

    } else {

        alert("O número é ímpar.")

    }

    adicionarlog();

}

/// Exercício 1 - Intermediário
function exercicioint01() {

    let número1 = parseFloat(prompt("Digite um número."));
    let número2 = parseFloat(prompt("Digite outro número."));
    let operacao = prompt("Digite a operação (+, -, *, /):");

    let resultado

    if (operacao === "+") {
        resultado = número1 + número2
    } else if (operacao === "-") {
        resultado = número1 - número2
    } else if (operacao === "*") {
        resultado = número1 * número2
    } else if (operacao === "/") {
        resultado = número1 / número2

    }

    alert("Resultado: " + resultado);

    adicionarlog();

}

/// Exercício 2 - Intermediário
function exercicioint02() {

    let valor = parseFloat(prompt("Valor da compra."));

    if (valor > 100) {

        let desconto = valor * 0.10;
        let valorComDesconto = valor - desconto;

        alert("Valor original: R$ " + valor.toFixed(2) + "\nDesconto de 10%: R$ " + desconto.toFixed(2) + "\nValor com desconto: R$ " + valorComDesconto.toFixed(2));

    } else {
        alert("Valor da compra: R$ " + valor.toFixed(2) + "\nSem desconto, valor normal.");
    }

    adicionarlog();

}

/// Exercício 3 - Intermediário
function exercicioint03() {

let usuario = prompt("Insira seu usuário.");
let senha = prompt("Insira sua senha.");

if (usuario == "admin" && senha == "1234") {

    alert("Login bem-sucedido");

} else {

    alert("Acesso negado");

}

    adicionarlog();

}

