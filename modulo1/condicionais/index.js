//---------------------------------------- Interpretação ----------------------------------------//

//1.

//a) Veri"fi"ca se o número digitado é par.
//b) Números pares
//c) Números ímpares.

//---------------------------------------------------

//2.

//a) Para informar o preço da fruta informada.
//b) "O preço da fruta Maçã é R$ 2.25"
//c) Seria impresso o valor padrão de R$5.

//---------------------------------------------------

//3.

//a) Transformando a string digitada em um número.
//b) "Esse número passou no teste".... Com um número negativo, não apareceria nada.
//c) Sim, dará erro pois a variavel "mensagem" é de escopo local da função de análise do IF e o escopo global não tem acesso à ela.

//---------------------------------------- Escrita ----------------------------------------//

//1.

// let idade = Number(prompt("Digite sua idade:"));

// if (idade >= 18) {
//     console.log("Você pode dirigir.")
// } else {
//     console.log("Você não pode dirigir.")
// }

//---------------------------------------------------

//2.

// let nome = prompt("Digite seu nome:");
// let turno = prompt("Informe com M, V ou N seu turno de estudo:");

// if (turno == "M"){
//     turno = "Bom dia";
//     console.log(`${turno}, ${nome}!`);
// } else if (turno == "V"){
//     turno = "Boa tarde";
//     console.log(`${turno}, ${nome}!`);
// } else if (turno == "N"){
//     turno = "Boa noite";
//     console.log(`${turno}, ${nome}!`);
// }

//---------------------------------------------------

//3.

// let nome = prompt("Digite seu nome:");
// let turno = prompt("Informe com M, V ou N seu turno de estudo:");

// switch (turno){
//     case "M":
//         turno = "Bom dia";
//         console.log(`${turno}, ${nome}!`);
//         break;
//     case "V":
//         turno = "Boa tarde";
//         console.log(`${turno}, ${nome}!`);
//         break;
//     case "N":
//         turno = "Boa noite";
//         console.log(`${turno}, ${nome}!`);
//         break;
// }

//---------------------------------------------------

//4.

// let genero = prompt("Digite o gênero do "fi"lme:");
// let preçoIngresso = prompt("Digite o preço do "fi"lme escolhido:");

// if (genero == "fantasia" && preçoIngresso <= 15){
//     console.log("Bom "fi"lme!")
// } else{
//     console.log("Escolha outro "fi"lme :(")
// }

//---------------------------------------- Desa"fi"os ----------------------------------------//

//1.

// let genero = prompt("Digite o gênero do "fi"lme:");
// let preçoIngresso = prompt("Digite o preço do "fi"lme escolhido:");


// if (genero == "fantasia" && preçoIngresso <= 15){
//     let lanche = prompt("Qual lanche você prefere: Pipoca, Chocolate, Balas ou Batata Frita")
//     console.log(`Bom "fi"lme e aproveite o seu ${lanche}!`)
// } else{
//     console.log("Escolha outro "fi"lme :(")
// }

//---------------------------------------------------

//2.

let nomeCliente = prompt("Digite seu nome completo:");
let tipo = prompt("Informe o tipo do jogo com 'IN' para Internacional e 'DO' para Doméstico:");
let etapa = prompt("Escolha a etapa do campeonato com 'SF'(semi-final), 'DT'terceiro) e 'FI'(Final):");
let categ = prompt("Informe a categoria do ingresso com 1, 2, 3 ou 4:")
let quant = prompt("Quantos ingressos deseja?")
let valor = 0;

if (etapa == "SF" && categ == 1){
    etapa = "Semi-Final"
    valor = 1320;
} else if (etapa == "SF" && categ == 2){
    etapa = "Semi-Final"
    valor = 880;
} else if (etapa == "SF" && categ == 3){
    etapa = "Semi-Final"
    valor = 550;
} else if (etapa == "SF" && categ == 4){
    etapa = "Semi-Final"
    valor = 220;
} else if (etapa == "DT" && categ == 1){
    etapa = "Terceiro-Lugar"
    valor = 660;
} else if (etapa == "DT" && categ == 2){
    etapa = "Terceiro-Lugar"
    valor = 440;
} else if (etapa == "DT" && categ == 3){
    etapa = "Terceiro-Lugar"
    valor = 330;
} else if (etapa == "DT" && categ == 4){
    etapa = "Terceiro-Lugar"
    valor = 170;
} else if (etapa == "FI" && categ == 1){
    etapa = "Final"
    valor = 1980;
} else if (etapa == "FI" && categ == 2){
    etapa = "Final"
    valor = 1320;
} else if (etapa == "FI" && categ == 3){
    etapa = "Final"
    valor = 880;
} else if (etapa == "FI" && categ == 4){
    etapa = "Final"
    valor = 330;
} else {
    console.log("Informação não encontrada.")
}

let resultadoConvers = 0;
let moeda = "R$"

if (tipo == "IN"){
    tipo = "Internacional";
    moeda = "U$"
    resultadoConvers = valor * 4.10;
} else {
    tipo = "Nacional";
    moeda = "R$"
    resultadoDomestico = valor * 1;
}

let valorTotal = (resultadoConvers * quant);

console.log(`---Dados da compra---`)
console.log(`Nome do cliente: ${nomeCliente}`)
console.log(`Tipo do jogo: ${tipo}`)
console.log(`Etapa do jogo: ${etapa}`)
console.log(`Categoria: ${categ}`)
console.log(`Quantidade de ingressos: ${quant}`)
console.log(`---Valores---`)
console.log(`Valor do ingresso: ${moeda} ${resultadoConvers}`)
console.log(`Valor total: ${moeda} ${valorTotal}`)