const tarefas = [
    "Primeira tarefa",
]

const adicionarTarefa = (nova) => {
    tarefas.push(nova)
}

const result = adicionarTarefa(process.argv[2])
console.log(tarefas)