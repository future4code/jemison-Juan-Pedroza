import React from 'react'
import { BlocoPrincipal, Header, Body, Nome, Texto, Info, Botoes, Teste, Limpar, Logo, BotaoMatch } from './../styled';
import astroLogo from '../img/astroLogo.png'
import botaoMatches from '../img/Botao.png'
import BotaoX from '../img/botaoX.png'
import BotaoO from '../img/botaoO.png'

function Inicial({ handlePageMatches, handleTeste, perfis, clear, handleBotaoNegar }) {

    const showPerfil = (perfil) => {
        return (
            <Body key={perfil.id}>
                <Teste>
                    <img src={perfil.photo} alt={perfil.photo_alt} />
                </Teste>
                <Info>
                    <Nome>
                        <h3>{perfil.name}</h3> <p>{perfil.age}</p>
                    </Nome>
                    <Texto>
                        <p>{perfil.bio}</p>
                    </Texto>
                </Info>
            </Body>
        )
    }

    return (
        <div>
            <BlocoPrincipal>
                <Header>
                    <Logo src={astroLogo} alt="astroLogo"/>
                    <BotaoMatch onClick={() => handlePageMatches("matches")} src={botaoMatches} alt="botaoMatches" />
                </Header>
                {showPerfil(perfis)}
                <Botoes>
                    <img onClick={handleBotaoNegar} src={BotaoX} alt="a" />
                    <img onClick={handleTeste} src={BotaoO} alt="b" />
                </Botoes>
            </BlocoPrincipal>
            <Limpar onClick={() => { clear() }}>Limpar Matches</Limpar>
        </div>
    )
}

export default Inicial