import React from 'react'
import { BlocoPrincipal, Header, MatchArea, FotoMatch, NomeMatch } from './../styled';

function Matches({ handlePageInicio, listaMatches }) {

    console.log(listaMatches)
    return (
        <BlocoPrincipal>
            <Header>
                <p>astromatch</p>
                <button onClick={() => handlePageInicio("inicial")}>icon</button>
            </Header>
            <MatchArea>
                <FotoMatch src={listaMatches.photo} alt={listaMatches.photo_alt} />
                <NomeMatch>{listaMatches.name}</NomeMatch>
            </MatchArea>
        </BlocoPrincipal>
    )
}

export default Matches