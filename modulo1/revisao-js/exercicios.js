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
  let nomeDoFilme = filme.nome;
  let anoDoFilme = filme.ano;
  let diretorDoFilme = filme.diretor;
  let atores = [filme.atores.join(', ')];

  return `Venha assistir ao filme ${nomeDoFilme}, de ${anoDoFilme}, dirigido por ${diretorDoFilme} e estrelado por ${atores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const pessoaAnonima = {
    ...pessoa,
     nome: "ANÔNIMO"
 };
 return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  return pessoas.filter((pessoa) => {
    return (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5)
  })
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  return pessoas.filter((pessoa) => {
    return !(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5)
  })
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
   let blabla = contas.map(item => {
    let somaCompras = item.compras.reduce((a,b) => a + b,0);
    let novoSaldo = item.saldoTotal -= somaCompras;
    item.compras = [];
  })
  const teste = {
    ...contas,
    saldoTotal: blabla.novoSaldo
  }
  let novoArray = Object.values(teste)
  return novoArray.filter(n => n)
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  consultas = consultas.sort((a,b) => {
    if (a.nome < b.nome) {
      return -1
    } else if (a.nome > b.nome) {
      return 1
    } else {
      return 0
    }
  })
  return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  consultas2 = consultas.sort((a,b) => {
    let d1 = new Date (a.dataDaConsulta);
    let d2 = new Date (b.dataDaConsulta);
    d1Mes = d1.getUTCDate();
    d2Mes = d2.getUTCDate();
    d1Dia = d1.getUTCMonth();
    d2Dia = d2.getUTCMonth();
    if(d1Mes > d2Mes){
      return 1;
    } else if(d1Mes < d2Mes){
      return -1;
    } else {
      return d1Dia - d2Dia;
    }
  })
  return consultas
}