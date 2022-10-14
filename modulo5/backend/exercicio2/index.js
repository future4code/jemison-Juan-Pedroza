const regex = new RegExp('[A-Za-z]')
const clients =
    [
        { id: 1, nome: "Fulano" },
        { id: 2, nome: "Ciclano" },
        { id: 3, nome: "Beltrano" },
        { id: 4, nome: "Fulana" }
    ]

const cadastraCliente = (id, name) => {
    if (regex.test(name)) {
        clients.push({id: id, nome: name})
    } else {
        console.log('Nome inválido.')
    }
}

cadastraCliente(5,"Juan")
console.log(clients)

///////////////////////////////////////////////////////////////////////

const tabuada = []

const geraTabuada = (number, limite) => {
    if (number <= 10) {
        for (i = 1; i < (limite + 1); i++) {
            tabuada.push(`${number} x ${i} = ${number * i}`)
        }
    } else {
        console.log('Erro. Parâmetro inválido (’número precisa valer entre 1 e 10’).')
    }

}
geraTabuada(10, 15)
console.log(tabuada)