import React from 'react'
import { MainDiv, Botoes, BotoesAlinhamento, Titulos } from '../Styled';
import { useNavigate } from 'react-router-dom'

function ListaViagens() {
    const navigate = useNavigate();

    const anterior = () => {
        navigate(-1)
    }
    const goToApplication = () => {
        navigate('/trips/application')
    }

    return (
        <MainDiv>
            <BotoesAlinhamento>
                <Botoes onClick={anterior}>Voltar</Botoes>
                <Botoes onClick={goToApplication}>Inscrever-se</Botoes>
            </BotoesAlinhamento>
            <Titulos>Lista de Viagens</Titulos>
        </MainDiv>
    )
}

export default ListaViagens