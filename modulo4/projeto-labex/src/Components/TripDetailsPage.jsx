import React from 'react'
import { MainDiv, Botoes, BotoesAlinhamento, Titulos, ListaViagem } from '../Styled';
import { BASE_URL } from './../Constantes/Constantes';
import { useRequestDataGet } from './../Hooks/useRequestDataGet';
import { useNavigate } from 'react-router-dom'

function TripDetailsPage() {

  const navigate = useNavigate();

  const anterior = () => {
    navigate(-1)
  }

  const [data, isLoading, error] = useRequestDataGet(`${BASE_URL}trips`)
  const tripsList = data && data.trips && data.trips.map((trip, key) => {
    return (
      <ListaViagem key={trip.id} >
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro</p>}
        {!isLoading && data && data.trips && data.trips.length > 0 && trip.name}
        {!isLoading && data && data.trips && data.trips.length === 0 && <p>Não há nenhuma viagem</p>}
      </ListaViagem>
    )
  })

  return (
    <MainDiv>
      <Titulos>Nome da viagem clicada</Titulos>
      {tripsList}
      <p>Dados da viagem clicada</p>
      <BotoesAlinhamento>
        <Botoes onClick={anterior}>Voltar</Botoes>
      </BotoesAlinhamento>
      <h4>Candidatos Pendentes</h4>
      <p>lista com cada candidato inscrito</p>
    </MainDiv>
  )
}
export default TripDetailsPage