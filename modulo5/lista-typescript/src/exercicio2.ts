const mostraTipo = (variavel:any) => {
    const tipo = (typeof variavel)
    console.log(`A variável ${variavel} é do tipo ${tipo}`)
}

mostraTipo(process.argv[2])