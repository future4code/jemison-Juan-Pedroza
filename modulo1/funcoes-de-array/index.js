//--------------------------------- Interpretação ---------------------------------//
/*
1. 
a) Será impresso o item (nome: "Amanda Rangel", apelido: "Mandi"), o index 0,1 ou 2 de cada um e em seguida todo o array original para cada item do array.

2.
a) "Amanda Rangel", "Laís Petra", "Letícia Chijo".

3.
a) "Mandi", "Laura"

//--------------------------------- Escrita ---------------------------------//

1.

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 a)
 const nomePet = pets.map((item) => {
    return item.nome
 })
 console.log(nomePet)

 b)
 const salsichas = pets.filter((item) => {
    return item.raca == "Salsicha";
 })
 console.log(salsichas)

c)
const descontoPoodle = pets.filter((item) =>{
    return item.raca == "Poodle"
})
const nomePoodle = descontoPoodle.map((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
})
// console.log(nomePoodle)

//-----------------------------------------------------//

2.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 a)
 const nomeItems = produtos.map((item) => {
    return item.nome
 })
 console.log(nomeItems)

 c)
 const nomePreco = produtos.filter((item) => {
    return item.preco -= item.preco * 0.05
})
console.log(nomePreco)


 c)
 const bebidas = produtos.filter((item) => {
    return item.categoria == "Bebidas"
})
console.log(bebidas)

d)
const ype = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})
console.log(ype)

e)
const fraseYpe = ype.map((item) => {
    return `Compre ${item.nome} por ${item.preco}`
})
console.log(fraseYpe)
*/
//--------------------------------- Desafios ---------------------------------//

//1.

// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "AaaaaVulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//  ]

// const teste = [4,1,5,7,5,98,2]
// const bla = teste.sort();

//  const alfabeto = pokemons.map((pokemon) => {
//      pokemon.nome
//      return pokemon
//  })
//  const blaaaa = alfabeto.sort();

//  console.log(blaaaa)