function obterEstatisticas(numeros: [number]) {

    const numerosOrdenados = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//a) entrada é um array de numeros e retorna um objeto com o maior número, o menor e a média entre eles

// b)
// numeros = array de numeros
// a = numero
// b = numero
// soma = numero
// maior = numero
// menor = numero
// media = numero