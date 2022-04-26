//------------------------ Interpretação ------------------------//
/*

////////////////////////1.

a. 10, 50
b. Nada. O calculo seria feito, mas nada seria mostrado.

////////////////////////2.

a. Transformar a palavra toda em minúscula e verificar se existe a palavra "cenoura".
b. true, true, true
*/

//--------------------------- Escrita ---------------------------//
/*

////////////////////////1.

a.
function informacoesEstudante (){
    const nome = "Juan";
    const idade = "30 anos";
    const cidade = "São Paulo";
    const ocupacao = "estudante";
    console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${ocupacao}.`)
}

informacoesEstudante();

b.
function informacoesEstudante2 (nome, idade, cidade, ocupacao){

    let nome2 = prompt("Digite seu nome:");
    let idade2 = prompt("Digite sua idade:");
    let cidade2 = prompt("Digite sua cidade:");
    let ocupacao2 = prompt("Digite sua ocupacao:");
    console.log(`Eu sou ${nome2}, tenho ${idade2} anos, moro em ${cidade2} e sou ${ocupacao2}.`)
}

informacoesEstudante2();


////////////////////////2.

a.
function somaParametros(numero1, numero2){
    let soma = numero1 + numero2;
    console.log(soma);
}
somaParametros(2, 3);

b.
function maiorOuIgual(primeiro, segundo){
    let analise = primeiro >= segundo;
    console.log(analise)
}
maiorOuIgual(3,2);

c.
function numeroPar(numeroAnalisado){
    let ePar = numeroAnalisado % 2 == 0;
    console.log(ePar)
}
numeroPar(4);

d.
function tamanhoString(textoEscolhido){
    let contarCaracteres = textoEscolhido.length;
    console.log(contarCaracteres, textoEscolhido.toUpperCase())
}
tamanhoString("Texto de teste");


////////////////////////3.

function operacoesBasicas(){
    let primeiroInput = prompt("Digite o primeiro número:");
    let segundoInput = prompt("Digite o segundo número:");

    console.log(`Números inseridos: ${primeiroInput} e ${segundoInput}`)

    function operacaoSoma(input1, input2){
        let resultadoSoma = Number(input1) + Number(input2);
        console.log(`Soma: ${resultadoSoma}`);
    }
    function operacaoSubtracao(input1, input2){
        let resultadoSubtracao = (input1 - input2);
        console.log(`Diferença: ${resultadoSubtracao}`);
    }
    function operacaoMultiplicacao(input1, input2){
        let resultadoMult = (input1 * input2);
        console.log(`Multiplicação: ${resultadoMult}`);
    }
    function operacaoDiv(input1, input2){
        let resultadoDiv = (input1 / input2);
        console.log(`Divisão: ${resultadoDiv}`);
    }
    operacaoSoma (primeiroInput, segundoInput);
    operacaoSubtracao(primeiroInput, segundoInput);
    operacaoMultiplicacao(primeiroInput, segundoInput);
    operacaoDiv(primeiroInput, segundoInput);    
}
operacoesBasicas();
*/

//--------------------------- Desafios ---------------------------//
/*

////////////////////////1.

a.
const arrowTeste = (parametro) => {
    console.log(parametro);
}

b.
const arrow2 = (valor1, valor2) =>{
    let somaValores = Number(valor1) + Number(valor2);
    let arrowFinal = arrowTeste(somaValores);
}
let arrow2Final = arrow2(4,8);


////////////////////////2.

function teoremaPitagoras(cateto1, cateto2){
    let HipAoQuadrado = (cateto1 * cateto1) + (cateto2 * cateto2);
    let raiz = Math.sqrt(HipAoQuadrado);
    console.log(`Hipotenusa dos catetos ${cateto1} e ${cateto2} é ${raiz}`)
    return raiz;
}
teoremaPitagoras(8,6);
*/