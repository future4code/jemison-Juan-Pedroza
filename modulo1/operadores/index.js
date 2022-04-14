///////////////////////////////// INTERPRETAÇÃO //////////////////////////////////

/*1.
a. false;
b. false;
c. true;
d. bool;

2.
O resultado de um prompt sempre será uma string, então o programa
irá mostrar números como string e não fará soma.

3.
A solução seria transformar string em numero usando Number (prompt()).
*/

//////////////////////////////// ESCRITA ////////////////////////////////////////

//1.
/*
let idadeUsuario = Number (prompt("Digite sua idade:"));
let idadeAmigo = Number (prompt("Digite a idade do seu melhor amigo(a):"));
let maisVelho = idadeUsuario > idadeAmigo;

console.log("Sua idade é maior do que a do seu melhor amigo.", maisVelho);
console.log(idadeUsuario - idadeAmigo);
*/
////////////////////////////////////////

//2.
/*
let numeroPar = Number(prompt("Insira um número par:"));
let resultado = numeroPar % 2;

console.log(resultado);

//c. Todo resultado mostrado será igual a zero.
//d. Informando um número ímpar, todos os resultados serão 1. */

/////////////////////////////////////////

//3.
/*
let idade = Number(prompt("Insira sua idade."));
let idadeMeses = idade * 12;
let idadeDias = idade * 365;
let idadeHoras = idade * 8760;

console.log("Sua idade em meses é:", idadeMeses);
console.log("Sua idade em dias é:", idadeDias);
console.log("Sua idade em horas é:", idadeHoras);
*/

//////////////////////////////////////////

//4.
/*
let primeiroNumero = Number(prompt("Insira o primeiro número:"));
let segundoNumero = Number(prompt("Insira o segundo número:"));
const divisivelA = (primeiroNumero % segundoNumero) == 0;
const divisivelB = (segundoNumero % primeiroNumero) == 0;


console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero);
console.log("O primeiro numero é igual ao segundo?", primeiroNumero == segundoNumero);
console.log("O primeiro numero é divisível pelo segundo?", divisivelA);
console.log("O segundo numero é divisível pelo primeiro?", divisivelB);
*/
///////////////////////////////////// DESAFIOS ///////////////////////////////////////

//1.

//a.
/*
let valorFahrenheit = 77;
let resultKelvin = (valorFahrenheit - 32)*(5/9) + 273.15;
console.log(resultKelvin +" °K");
*/

//b.
/*
let valorCelsius = 80;
let resultFahrenheit = (valorCelsius)*(9/5) + 32;
console.log(resultFahrenheit +" °F");
*/

//c.
/*
let valorCelsius = 30;
let resultFahrenheit = (valorCelsius)*(9/5) + 32;
let resultKelvin = (resultFahrenheit - 32)*(5/9) + 273.15;
console.log(resultKelvin +" °K" + " e " + resultFahrenheit +" °F");
*/

//d.
let valorCalculado = Number(prompt("Insira o valor em Celsius a ser convertido:"));
let resultFahrenheit = (valorCalculado)*(9/5) + 32;
let resultKelvin = (resultFahrenheit - 32)*(5/9) + 273.15;
console.log(resultKelvin +" °K" + " e " + resultFahrenheit +" °F");