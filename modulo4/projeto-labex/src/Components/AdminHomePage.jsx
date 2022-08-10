import React from 'react'
import { MainDiv, Botoes, BotoesAlinhamento, Titulos } from '../Styled';

import { useNavigate } from 'react-router-dom'

function Administrativo() {
    const navigate = useNavigate();

    const anterior = () => {
        navigate(-1)
    }
    const goToCreateTrip = () => {
        navigate('/admin/trips/create')
    }
    const goToLogin = () => {
      navigate('/login')
    }

  return (
    <MainDiv>
        <Titulos>Painel Administrativo</Titulos>
        <BotoesAlinhamento>
            <Botoes onClick={anterior}>Voltar</Botoes>
            <Botoes onClick={goToCreateTrip}>Criar Viagem</Botoes>
            <Botoes onClick={goToLogin}>Login</Botoes>
        </BotoesAlinhamento>
    </MainDiv>
  )
}

export default Administrativo