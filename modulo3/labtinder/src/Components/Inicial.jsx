import React from 'react'
import { BlocoPrincipal, Header, Body, Nome, Texto, Info, Botoes, Teste, Limpar } from './../styled';

function Inicial({ handlePageMatches, handleTeste, perfis, clear }) {

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
                    <p>astromatch</p>
                    <button onClick={() => handlePageMatches("matches")}>icon</button>
                </Header>
                {showPerfil(perfis)}
                <Botoes>
                    <button onClick={handleTeste}>X</button>
                    <button onClick={handleTeste}>O</button>
                </Botoes>
            </BlocoPrincipal>
            <Limpar onClick={() => { clear() }}>Limpar Matches</Limpar>
        </div>
    )
}

export default Inicial