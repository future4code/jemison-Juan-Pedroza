enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

const genreSelect = process.argv[4] as GENERO

const movieInfo = (name: string, year: number, genre: GENERO, grade?: number) => {
    console.log(grade !== undefined ? `nome: ${name}, anoLancamento: ${year}, genero: ${genre}, pontuacao: ${grade}` : `nome: ${name}, anoLancamento: ${year}, genero: ${genre}`)
}


movieInfo(process.argv[2], Number(process.argv[3]), genreSelect, Number(process.argv[5]))