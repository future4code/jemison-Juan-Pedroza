import React from 'react'
import { BlocoPrincipal, Header, MatchArea, FotoMatch, NomeMatch, DivTeste, Logo, BotaoMatch  } from './../styled';
import astroLogo from '../img/astroLogo.png'
import botaoMatches from '../img/Botao.png'

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
                <Logo src={astroLogo} alt="astroLogo" />
                <BotaoMatch onClick={() => handlePageInicio("inicial")} src={botaoMatches} alt="botaoMatches" />
            </Header>
            <MatchArea>
                {teste}
            </MatchArea>
        </BlocoPrincipal>
    )
}

export default Matches