const converteCelsius = (temp, escala) => {
    if (escala === 'F') {
        const result = ((temp * 1.8) + 32)
        console.log(`${temp} Celsius é equivalente a ${result}° ${escala}`)
    } else if ((escala === 'K')) {
        const result = (temp + 273.15)
        console.log(`${temp} Celsius é equivalente a ${result} ${escala}`)
    } else {
        console.log(`Erro. Parâmetro inválido. ${temp, escala}`)
    }
}

converteCelsius(30, 'F')
converteCelsius(60, 'K')
converteCelsius(12, 'g')