const fatorial = (n: number) => {
    for (let i = n; i > 0; i--) {
        n *= n - 1
        console.log(n)
    }
}

fatorial(4)