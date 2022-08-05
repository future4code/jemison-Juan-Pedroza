import React from 'react'
import { BlocoPrincipal, Header, MatchArea, FotoMatch, NomeMatch, DivTeste } from './../styled';

function Matches({ handlePageInicio, listaMatches }) {

    console.log(listaMatches)

    const teste = listaMatches.map((match, key) => {
        return (
            <DivTeste key={match.id}>
                <FotoMatch src={match.photo} alt={match.photo_alt} />
                <NomeMatch>{match.name}</NomeMatch>
            </DivTeste>
        )
    })

    return (
        <BlocoPrincipal>
            <Header>
                <p>astromatch</p>
                <button onClick={() => handlePageInicio("inicial")}>icon</button>
            </Header>
            <MatchArea>
                {teste}
            </MatchArea>
        </BlocoPrincipal>
    )
}

export default Matches