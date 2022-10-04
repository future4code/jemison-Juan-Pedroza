const primeiraLista = [
    {
        nome: "Banana"
    },
    {
        nome: "Laranja"
    }
]

const segundaLista = [
    {
        nome: "Laranja"
    },
    {
        nome: "Cebola"
    }
]

const listaFinal = []

const juntaListas = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        if (listaFinal.indexOf(arr1[i]) === -1) {
            listaFinal.push(arr1[i])
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (listaFinal.indexOf(arr2[i]) === -1) {
            listaFinal.push(arr2[i])
        }
    }
}

juntaListas(primeiraLista, segundaLista)
console.log(listaFinal)