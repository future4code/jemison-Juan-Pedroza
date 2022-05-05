//------------------------------------- Interpretação -------------------------------------//
/*
1. 

somando o valor de "valor" a cada passagem até 4.
0,1,3,6,10

--------------------------------------------------------------//

2.

a) 19,21,23,25,27,30
b)Sim. IndexOf()

--------------------------------------------------------------//

3. 
*
**
***

//------------------------------------- Escrita -------------------------------------//

//1.

let qntBichinhos = Number(prompt("Quantos bichos de estimação você tem?"));
let arrayBichinhos = [];

if (qntBichinhos == 0){
    console.log("Que pena, você pode adotar um pet!");
} else {
    for (i = 0; i < qntBichinhos; i++){
        let nomeBichinho = prompt("Quais são os nomes deles?");
        arrayBichinhos.push(nomeBichinho);
    }
}
console.log(arrayBichinhos);

--------------------------------------------------------------//
//2. 

let arrayOriginal = [37, 97, 86, 60, 11, 76, 32, 55, 46, 64];

a)
for (numero of arrayOriginal){
    console.log(numero)
}

b)
for (numero of arrayOriginal){
    console.log(numero / 10);
}

c)
let arrayPar = [];
for (numero of arrayOriginal) {
    if (numero % 2 == 0) {
        arrayPar.push(numero);
    }
}
console.log(arrayPar)

d)
let frase = "";
let novoArray = [];

    for (i = 0; i < arrayOriginal.length; i++){
        novoArray.push(frase);
        frase = (`O elemento do índex ${i} é: ${arrayOriginal[i]}.`)
    }
console.log(novoArray)

e)
let menorValor = arrayOriginal[0];
let maiorValor = 0;

for (numero of arrayOriginal){
    if (numero < menorValor){
        menorValor = numero;
    }
    if (numero > maiorValor){
        maiorValor = numero;
    }
}
console.log(`O maior número é ${maiorValor} e o menor é ${menorValor}`)


//------------------------------------- Desafios -------------------------------------//

1.
let resposta;
let tentativa;
let tentativas= [];
let tentativaMenor;
let tentativaMaior;

resposta = prompt("Informe o número a ser descoberto:");

console.log("Vamos jogar!")

while(tentativa != resposta){
    tentativa = prompt("Advinhe o número que eu estou pensando de 1 a 100:");
    tentativas.push(tentativa);
    if (resposta > tentativa){
        console.log(`O número chutado foi: ${tentativa}`);
        console.log(`Errrrrrrrrrrrrouu!! É maior.`);
    }else if (resposta < tentativa){
        console.log(`O número chutado foi: ${tentativa}`);
        console.log(`Errrrrrrrrrrrrouu!! É menor.`);
    }else {
        console.log("Acertooooouuu!!!");
        console.log(`O número de tentativas foi: ${tentativas.length -1}`);
    }
}

--------------------------------------------------------------//

2. 

let tentativa;
let tentativas= [];
let tentativaMenor;
let tentativaMaior;

let resposta = Math.floor((Math.random() * 100) + 1);

console.log("Vamos jogar!")

while(tentativa != resposta){
    tentativa = prompt("Advinhe o número que eu estou pensando de 1 a 100:");
    tentativas.push(tentativa);
    if (resposta > tentativa){
        console.log(`O número chutado foi: ${tentativa}`);
        console.log(`Errrrrrrrrrrrrouu!! É maior.`);
    }else if (resposta < tentativa){
        console.log(`O número chutado foi: ${tentativa}`);
        console.log(`Errrrrrrrrrrrrouu!! É menor.`);
    }else {
        console.log("Acertooooouuu!!!");
        console.log(`O número de tentativas foi: ${tentativas.length -1}`);
    }
}

Foi bem fácil fazer essa alteração no código, pois hoje em dia é bem fácil de encontrar informações a respeito de qualquer assunto.
*/