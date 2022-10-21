const fatorial = (n: number) => {
    let factorial = 1
    for (let i = 1; i <= n; i++) {
        factorial *= i
    }
    console.log(factorial)
}

const contaAnagrama = (word:string) => {
    const letters:string[] = word.split('')
    fatorial(letters.length)
}

contaAnagrama('juanCarlos')