type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//b) É necessario especificar o nome do arquivo e criar um "run" no package.json
//c) Se o arquivo estiver dentro de src, ele já faz a transpilação para todos arquivos TS.
//d) Informando diversos nomes de arquivos dentro do comando run no package.json