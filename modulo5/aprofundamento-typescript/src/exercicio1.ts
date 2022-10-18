// a) 
// const minhaSting: string = 1 --- nao pode ser atribuido

// b) 
// const meuNumero: string | number = 1

//c)

enum coresArcoIris {
    'vermelho', 'laranja', 'amarelo', 'verde', 'azul', 'anil', 'violeta'
}

type person = {
    nome: string,
    idade: number,
    corFavorita: coresArcoIris
}

const pessoa1: person = {
    nome: 'Juan',
    idade: 31,
    corFavorita: coresArcoIris.azul
}
const pessoa2: person = {
    nome: 'John',
    idade: 32,
    corFavorita: coresArcoIris.vermelho
}
const pessoa3: person = {
    nome: 'Jean',
    idade: 33,
    corFavorita: coresArcoIris.verde
}


