import React from 'react'
import { MainDiv } from '../Styled';
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
            <div>
                <button onClick={anterior}>Voltar</button>
                <button onClick={goToApplication}>Inscrever-se</button>
            </div>
            <h1>Lista de Viagens</h1>
        </MainDiv>
    )
}

export default ListaViagens