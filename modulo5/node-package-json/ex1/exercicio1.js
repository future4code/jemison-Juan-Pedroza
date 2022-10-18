// a) process.argv

const calcIdade = (name, age) => {
    console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age+7}.`)
}

const result = calcIdade(process.argv[2], process.argv[3])