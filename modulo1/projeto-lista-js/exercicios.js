// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem = prompt('Digite uma mensagem!')
  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number(prompt("Digite a altura do retângulo:"));
  let largura = Number(prompt("Digite a largura do retângulo:"));
  let area = altura * largura;
  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt("Digite o ano atual:"));
  let anoNascimento = Number(prompt("Digite seu ano de nascimento:"));
  const idade = anoAtual - anoNascimento;
  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Insira seu nome:");
  let idade = Number(prompt("Insira sua idade:"));
  let email = prompt("Informe seu email:");
  console.log("Meu nome é " + nome + ", tenho " + idade + " anos," + " e o meu email é " + email + ".");
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Informe a primeira cor desejada:");
  let cor2 = prompt("Informe a segunda cor desejada:");
  let cor3 = prompt("Informe a terceira cor desejada:");
  let cores = [cor1, cor2, cor3];
  console.log(cores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length == string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length -1];

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let primeiroRemovido = array.shift();
  let ultimoRemovido = array.pop();
  array.unshift(ultimoRemovido); // adicioanr ultimo no começo
  array.push(primeiroRemovido); // adicionar primeiro no final
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let aumenta1 = string1.toUpperCase();
  let aumenta2 = string2.toUpperCase();
  return aumenta1 == aumenta2;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual13 = prompt("Informe o ano atual:");
  let anoNascimento13 = prompt("Digite o seu ano de nascimento:");
  let carteiraEmitida = prompt("Digite o ano que sua carteira foi emitida:");
  let idadeCalculada = (anoAtual13 - anoNascimento13);
  let ultimaRenovacao = (anoAtual13 - carteiraEmitida);
  
  const menorVinte = idadeCalculada <= 20;
  const maiorVinte = idadeCalculada > 20 && idadeCalculada < 51;
  const maiorCinq = idadeCalculada > 50;

  console.log(menorVinte && ultimaRenovacao >= 5 || maiorVinte && ultimaRenovacao >= 10 || maiorCinq && ultimaRenovacao >= 15);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  let multiploQuatCe = ano % 400 == 0;
  let multiploCem = ano % 100 == 0;
  let multiploQuatro = ano % 4 == 0;
  let excecao = multiploQuatro && multiploCem && !multiploQuatCe;
  let bissexto = multiploQuatCe || multiploQuatro || multiploCem;
  let result = !excecao && bissexto
  return result;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let maiorDeIdade = prompt("Você tem mais de 18 anos?");
  let ensino = prompt("Você possui ensino médio completo?");
  let disponivel = prompt("Você possui disponibilidade exclusiva durante os horários do curso?");

  let maiorDeIdadeConfirm = maiorDeIdade === "sim";
  let ensinoConfirm = ensino === "sim";
  let disponivelConfirm = disponivel === "sim";

  console.log(maiorDeIdadeConfirm && ensinoConfirm && disponivelConfirm);
}