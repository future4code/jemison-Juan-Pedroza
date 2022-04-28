//------------------------------------ Interpretação ------------------------------------//
/*

1. "Matheus Nachtergaele", "Virginia Cavendish", canal: "Globo", horario: "14h";

------------------------------------------------------------------

2. 

a) 
nome: "Juca", 
idade: 3, 
raca: "SRD",

nome: "Juba", 
idade: 3, 
raca: "SRD"

nome: "Jubo", 
idade: 3, 
raca: "SRD"

b) Uma cópia do objeto informado depois dos pontos.

------------------------------------------------------------------

3.

a) false, undefined

b) A função está pedindo para ver a informação backender do objeto que é false, e a informação altura, que é inexistente.

//------------------------------------ Escrita ------------------------------------//

//1.

const pessoa = {
    nome: "Juan Carlos",
    apelidos: ["Ju", "Juca", "Kapthos"]
}

function frase (objeto){
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`);
}
frase(pessoa);

const pessoa2 = {
    ...pessoa,
    apelidos: ["Não sei", "Qualquer um", "Moço"],
    
}
frase(pessoa2)

//------------------------------------------------------------------

//2.

const trabalhador = {
    nome: "Juan Carlos",
    idade: 30,
    profissao: "estudante"
}

function valoresTrabalhador (objeto2) {
    resultado = [trabalhador.nome, trabalhador.nome.length, trabalhador.idade, trabalhador.profissao, trabalhador.profissao.length];
    console.log(resultado)
    return resultado;
}
valoresTrabalhador(trabalhador)

//------------------------------------------------------------------

//3.

let carrinho = [];

const fruta1 = {
    nome: "maça",
    disponivel: true,
}
const fruta2 = {
    nome: "banana",
    disponivel: true,
}
const fruta3 = {
    nome: "morango",
    disponivel: true,
}

function carrinhoFunc (fruta){
    carrinho.push(fruta1);   
    carrinho.push(fruta2);
    carrinho.push(fruta3);
    console.log(carrinho);
}
carrinhoFunc();
//------------------------------------ Desafios ------------------------------------//

//1.

// function criarObjeto (){
//     const nome = prompt("Digite seu nome:");
//     const idade = prompt("Digite sua idade");
//     const profissao = prompt("Informe sua profissão");

//     const pessoaObj = {
//         nome: nome,
//         idade: idade,
//         profissao: profissao,
//     }
//     console.log(nome, idade, profissao, typeof(pessoaObj));
// }
// criarObjeto();


//------------------------------------------------------------------

//2.

let filme1 = {
    dataLancamento1: 2019,
}
let filme2 = {
    dataLancamento2: 2019,
}

function comparacaoDatas (){
    resultado1 = filme1.dataLancamento1 < filme2.dataLancamento2;
    resultado2 = filme1.dataLancamento1 <= filme2.dataLancamento2;
    console.log(`O primeiro filme foi lançado antes do segundo?` , resultado1);
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo?` , resultado2);
}
comparacaoDatas();
//------------------------------------------------------------------

//3.
function carrinhoIndisp (fruta){
    const indisponivel = fruta1.disponivel = false;
    console.log(fruta1.disponivel);
    return indisponivel;
}
carrinhoIndisp();
*/