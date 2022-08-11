import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MainDiv, Titulos, Formulario, Inputs, Botoes, BotoesAlinhamento, Selected } from '../Styled';
import Paises from './Paises';
import { useRequestDataGet } from './../Hooks/useRequestDataGet';
import { BASE_URL } from './../Constantes/Constantes';

function ApplicationFormPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  const [trips, isLoading, error] = useRequestDataGet(`${BASE_URL}trips`)

  const tripsList = trips && trips.map((trip, key) => {
    return (
      <option key={trip.id} value="a">
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro</p>}
        {!isLoading && trips && trips.length > 0 && trip.name}
        {!isLoading && trips && trips.length === 0 && <p>Não há nenhuma viagem</p>}
        </option>
    )
  })

  return (
    <MainDiv>
      <Titulos>Inscreva-se para uma viagem</Titulos>
      <Formulario>
        <Selected name="Teste1" id="t1">
          {tripsList}
        </Selected>
        <Inputs type="text" placeholder='Nome' />
        <Inputs type="text" placeholder='Idade' />
        <Inputs type="text" placeholder='Texto de candidatura' />
        <Inputs type="text" placeholder='Profissão' />
        <Paises />
      </Formulario>
      <BotoesAlinhamento>
        <Botoes onClick={goBack}>Voltar</Botoes>
        <Botoes>Enviar</Botoes>
      </BotoesAlinhamento>
    </MainDiv>
  )
}

export default ApplicationFormPage