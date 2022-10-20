const mostraInfos = (nome: string, data: string) => {
    const words = data.split('/');
    const dia = words[0]
    const mes = words[1]
    const ano = words[2]
    console.log(`Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`)
}

mostraInfos(process.argv[2], process.argv[3])