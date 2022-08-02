import React, { useEffect, useState } from 'react'
import { BlocoPrincipal, Header, Body, Nome, Texto, Info, Botoes, Teste, Limpar } from './../styled';
import axios from 'axios';

function Inicial({ handlePageMatches }) {

    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person'
    const url_choice = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person'

    const [perfis, setPerfis] = useState({})
    const [currentID, setCurrentID] = useState()
    const [isMatch, SetIsMatch] = useState(true)

    const body = {
        "id": {currentID},
        "choice": {isMatch}
    }

    const handleTeste = (bla) => {
        setCurrentID(bla)
    }

    // console.log(isMatch)


    const GetProfileToChoose = () => {
        axios.get(url)
            .then((response) => setPerfis(response.data.profile))
            .catch((error) => console.log(error.response))
    }

    const ChoosePerson = () => {
        axios.post(url_choice, body)
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error.response))
    }

    useEffect(() => {
        GetProfileToChoose()
        ChoosePerson()
    }, [])

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
                    <button>X</button>
                    <button onClick={(e) => { handleTeste(perfis.id) }}>O</button>
                </Botoes>
            </BlocoPrincipal>
            <Limpar>Limpar Matches</Limpar>
        </div>
    )
}

export default Inicial