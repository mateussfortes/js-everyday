/*

    É um bloco de código feito para realizar uma tarefa particular
    É executado quando alguém o invokca

*/

function myFunction(a, b) {
    return a * b;
}

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

// SYNTAX

// O nome da funçao possui as mesmas regras das variáveis

// THE () OPERATOR

// Acessar uma funcao sem () retorna a funçao e nao o resultado
let value = myFunction;
// Refere-se ao objeto da funcao, nao ao resultado.


// FUNCOES PODEM SER USADAS COMO VARIAVEIS
let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";

let text2 = "The temperature is " + toCelsius(77) + " Celsius";


// VARIAVEIS LOCAIS
// code here can not use carName
function myFunction2() {
    let carName = "Volvo";
}
// code here can not use carName

// Local variables are create when a function starts, 
// and deleted when the function is completed