export function imprimeTresCoresFavoritas(cor1: string, cor2: string, cor3: string) {
    console.log([cor1, cor2, cor3])
}

imprimeTresCoresFavoritas(process.argv[2], process.argv[3], process.argv[4])
