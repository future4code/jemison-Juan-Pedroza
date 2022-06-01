function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let count = arrayDeNumeros.filter(item => item == numeroEscolhido).length;
  if (count > 0){
    return `O número ${numeroEscolhido} aparece ${count}x`
  }else{
    return `Número não encontrado`
  }
}