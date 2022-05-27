function calculaPrecoTotal(quantidade) {
  let precoMaca = 0

  if(quantidade >= 12){
    precoMaca = 1;
  } else {
    precoMaca = 1.30
  }
  
  let total = (quantidade * precoMaca)
  
  return total
}