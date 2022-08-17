import React from 'react'
import { MainDiv, Botoes, BotoesAlinhamento, Titulos, ListaViagem } from '../Styled';
import { BASE_URL } from './../Constantes/Constantes';
import { useRequestDataGet } from './../Hooks/useRequestDataGet';
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

  const goToDetails = (idViagem) => {
    navigate(`/admin/trips/${idViagem}`)
  }

  const [data, isLoading, error] = useRequestDataGet(`${BASE_URL}trips`)
  const tripsList = data && data.trips && data.trips.map((trip, key) => {
    return (
      <ListaViagem onClick={() => goToDetails(trip.id)}>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro</p>}
        {!isLoading && data && data.trips && data.trips.length > 0 && trip.name}
        {!isLoading && data && data.trips && data.trips.length === 0 && <p>Não há nenhuma viagem</p>}
        <p>icon</p>
      </ListaViagem>
    )
  })


  return (
    <MainDiv>
      <Titulos>Painel Administrativo</Titulos>
      <BotoesAlinhamento>
        <Botoes onClick={anterior}>Voltar</Botoes>
        <Botoes onClick={goToCreateTrip}>Criar Viagem</Botoes>
        <Botoes onClick={goToLogin}>Login</Botoes>
      </BotoesAlinhamento>
      <h2>Lista de viagens disponíveis:</h2>
      {tripsList}
    </MainDiv>
  )
}

export default Administrativo