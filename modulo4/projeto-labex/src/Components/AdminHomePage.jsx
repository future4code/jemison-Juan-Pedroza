import React from 'react'
import { MainDiv } from '../Styled';
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
        <h1>Painel Administrativo</h1>
        <div>
            <button onClick={anterior}>Voltar</button>
            <button onClick={goToCreateTrip}>Criar Viagem</button>
            <button onClick={goToLogin}>Login</button>
        </div>
    </MainDiv>
  )
}

export default Administrativo