// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b) => a-b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const arrayPares = array.filter((value) => {
        return value % 2 == 0;
    })
  return arrayPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const arrayPares2 = array.filter((value) => {
        return value % 2 == 0;
    })
    const elevados = arrayPares2.map((value) => {
        return value *= value;
    })
  return elevados;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  array.sort((a,b) => a-b);
  return array[array.length -1]
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  if (num1 > num2){
    maNumero = num1;
    meNumero = num2;
} else {
    maNumero = num2;
    meNumero = num1;
}
let divisivel = maNumero % meNumero == 0;

let dif = maNumero - meNumero;

return objeto = {
    maiorNumero: maNumero,
    maiorDivisivelPorMenor: divisivel,
    diferenca: dif,
}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let arrayNumeros = [];
   

  for (i = 0; i < n*2; i++){
      if (i % 2 == 0){
          arrayNumeros.push(i);
      }
  }
  return arrayNumeros
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC){
    return "Escaleno";
  } else if (ladoA == ladoB && ladoA == ladoC){
    return "Equilátero"
  } else if (ladoA != ladoB && ladoA == ladoC){
    return "Isósceles"
  } else{
    return "Isósceles"
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let novoArray = [];
  array.sort((a,b) => a-b)
  novoArray.push(array[array.length -2])
  novoArray.push(array[1])
  return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}