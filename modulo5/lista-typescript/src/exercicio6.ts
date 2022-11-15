type clientes = { cliente: string, saldoTotal: number, debitos: number[] }

const arrayClientes: clientes[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const calculaSaldo = (array: clientes[]) => {
    array.map((i) => {
        const initialValue = 0
        const result = i.debitos.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
        let novoSaldo = (i.saldoTotal - result)
        if (novoSaldo < 0) {
            i.saldoTotal = novoSaldo
            i.debitos = []
            console.log(i)
        }
    })
}

calculaSaldo(arrayClientes)