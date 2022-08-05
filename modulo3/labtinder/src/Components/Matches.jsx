import React from 'react'
import { BlocoPrincipal, Header, MatchArea, FotoMatch, NomeMatch } from './../styled';

function Matches({ handlePageInicio, listaMatches1 }) {

    console.log(listaMatches1.name)
    
    return (
        <BlocoPrincipal>
            <Header>
                <p>astromatch</p>
                <button onClick={() => handlePageInicio("inicial")}>icon</button>
            </Header>
            <MatchArea>
                <FotoMatch src={listaMatches1.photo} alt={listaMatches1.photo_alt} />
                <NomeMatch>{listaMatches1.name}</NomeMatch>
            </MatchArea>
        </BlocoPrincipal>
    )
}

export default Matches