function adicionarlog() {

    let divLogs = document.querySelector(".logs"); // Seleciona a div

    let tagP = document.createElement("p"); //Cria a tag p

    tagP.innerHTML = "Exercício executado em " + new Date().toLocaleDateString() + " as " + new Date().toLocaleTimeString();    

    divLogs.appendChild(tagP); // Acrescenta a tagP dentro da divLogs.

}

// console.log("FOR")
function exerciciorep01for() {

    for (let contadora = 1; contadora <= 10; contadora++) {

        console.log(contadora);

    }

    alert("Verificar exercício no console.")

    adicionarlog();

}


// console.log("WHILE")
function exerciciorep01while() {

    let contadoraWhile = 1;
    while (contadoraWhile <= 10) {

        console.log(contadoraWhile);

        contadoraWhile++;

    }

    alert("Verificar exercício no console.")

    adicionarlog();

}

// Exercicio 1 - Básico

// for (let contadora = 1; contadora <=10; contadora++) {

//     console.log(contadora);

// }

// Exercicio 2 - Básico
function exercicio02rep() {

    let número = prompt("Digite um número.");

    for (let contadora = 1; contadora <= 10; contadora++) {

        let resultado = contadora * número

        console.log(resultado);

    }

    alert("Verificar exercício no console.")

    adicionarlog();

}

// Exercicio 3 - Básico
function exercicio03rep() {

    let N = prompt("Digite um número.");
    N = Number(N);

    let soma = 0;

    for (let contadora = 1; contadora <= N; contadora++) {

        soma = soma + contadora;

        // console.log("A soma dos primeiros", N, "Números naturais é", soma);

    }

    console.log(soma)

    alert("Verificar exercício no console.")

    adicionarlog();

}

// Exercicio 1 - Intermediário
function exerciciointrep01() {

    for (let contadora = 0; contadora <= 50; contadora += 2) {

        console.log(contadora);

    }

    adicionarlog();

}

// Exercicio 2 - Intermediário
function exerciciointrep02() {

let contadoraWhile = 50;
while (contadoraWhile >= 0) {

    console.log(contadoraWhile);

    contadoraWhile--;

}

    adicionarlog();

}


