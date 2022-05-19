```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {

let valorUnitario;
let comissao;
let salarioFinal;

valorUnitario = valorTotalVendas / qtdeCarrosVendidos;
if (qtdeCarrosVendidos == 0 || valorTotalVendas == 0){
  valorUnitario = 0;
}
comissao = (valorUnitario * 0.05) + 100
salarioFinal = (comissao * qtdeCarrosVendidos) + 2000

return salarioFinal
}