import React from 'react'
import { MainDiv, Botoes, BotoesAlinhamento, Titulos, ListaViagem, TitulosSecundario, BotaoLixo } from '../Styled';
import { BASE_URL } from './../Constantes/Constantes';
import { useRequestDataGet } from './../Hooks/useRequestDataGet';
import { useNavigate } from 'react-router-dom'
import { useProtectedPage } from './../Hooks/useProtectedPage';
import Lixo from '../Constantes/Lixo.png'
import axios from 'axios'

function Administrativo() {
  useProtectedPage();

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

  const deletar = (idDaViagem) => {
    const token = localStorage.getItem("token")
    axios.delete(`${BASE_URL}trips/${idDaViagem}`, {
      headers: {
        auth: token
      }
    }).then((res) => alert("Viagem deletada com sucesso!"))
      .catch((error) => console.log("deu ruim"))
  }

  const [data, isLoading, error] = useRequestDataGet(`${BASE_URL}trips`)
  const tripsList = data && data.trips && data.trips.map((trip, key) => {
    return (
      <ListaViagem key={trip.id} onClick={() => goToDetails(trip.id)}>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro</p>}
        {!isLoading && data && data.trips && data.trips.length > 0 && trip.name}
        {!isLoading && data && data.trips && data.trips.length === 0 && <p>Não há nenhuma viagem</p>}
        <BotaoLixo src={Lixo} alt="lixo" onClick={() => deletar(trip.id)} />
      </ListaViagem>
    )
  })

  return (
    <MainDiv>
      <Titulos>Painel Administrativo</Titulos>
      <BotoesAlinhamento>
        <Botoes onClick={anterior}>Voltar</Botoes>
        <Botoes onClick={goToCreateTrip}>Criar Viagem</Botoes>
        <Botoes onClick={goToLogin}>Logout</Botoes>
      </BotoesAlinhamento>
      <TitulosSecundario>Lista de viagens disponíveis:</TitulosSecundario>
      {tripsList}
    </MainDiv>
  )
}

export default Administrativo