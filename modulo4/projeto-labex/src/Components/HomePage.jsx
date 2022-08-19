import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MainDiv, Botoes, BotoesAlinhamento, Titulos } from '../Styled';

function Home() {
    const navigate = useNavigate();

    const goToViagens = () => {
        navigate('trips/list')
    }
    const goToAdmin = () => {
        navigate('login')
    }

    return (
        <MainDiv>
            <Titulos>LabeX</Titulos>
            <BotoesAlinhamento>
                <Botoes onClick={goToViagens}>Ver Viagens</Botoes>
                <Botoes onClick={goToAdmin}>Área de Admin</Botoes>
            </BotoesAlinhamento>
        </MainDiv>
    )
}

export default Home