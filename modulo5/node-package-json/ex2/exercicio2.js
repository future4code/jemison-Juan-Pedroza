const soma = (operacao, num1, num2) => {
    switch (operacao) {
        case 'sum':
            const resultSum = (Number(num1) + Number(num2))
            console.log(resultSum)
            break;
        case 'sub':
            const resultSub = (Number(num1) - Number(num2))
            console.log(resultSub)
            break;
        case 'mult':
            const resultMult = (Number(num1) * Number(num2))
            console.log(resultMult)
            break;
        case 'div':
            const resultDiv = (Number(num1) / Number(num2))
            console.log(resultDiv)
            break;
    }
}
const resp = soma(process.argv[2], process.argv[3], process.argv[4])