import React, { useEffect } from 'react'
import { MainDiv, Botoes, BotoesAlinhamento, TripDiv, TripsInfo, InfoViagem, Titulos, TitulosSecundario } from '../Styled';
import { BASE_URL } from './../Constantes/Constantes';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import { useProtectedPage } from './../Hooks/useProtectedPage';

function TripDetailsPage() {
  useProtectedPage();

  const navigate = useNavigate();

  const anterior = () => {
    navigate(-1)
  }

  const [infoTrip, setinfoTrip] = useState({})
  const [candidatos, setCandidatos] = useState([])

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get(`${BASE_URL}trip/lDHLGsAzSpvlS1xEbm0k`, {
      headers: {
        auth: token
      }
    }).then((res) => {
      setinfoTrip(res.data.trip)
      setCandidatos(res.data.trip.candidates)
    }).catch((error) => {
      console.log("deu erro", error.message)
    })
  }, [])

  const listaCandidatos = candidatos.map((candidato, key) => {
    return (
      <TripDiv key={candidato.id}>
        <TripsInfo>
          <p>Nome: </p><span>{candidato.name}</span>
        </TripsInfo>
        <TripsInfo>
          <p>Profissão: </p><span>{candidato.profession}</span>
        </TripsInfo>
        <TripsInfo>
          <p>Idade: </p><span>{candidato.age}</span>
        </TripsInfo>
        <TripsInfo>
          <p>País: </p><span>{candidato.country}</span>
        </TripsInfo>
        <TripsInfo>
          <p>Candidatura: </p><span>{candidato.applicationText}</span>
        </TripsInfo>
      </TripDiv>
    )
  })

  return (
    <MainDiv>
      <Titulos>{infoTrip.name}</Titulos>
      <InfoViagem>
        <TripsInfo>
          <p>Nome: </p><span>{infoTrip.name}</span>
        </TripsInfo>
        <TripsInfo>
          <p>Descrição: </p><span>{infoTrip.description}</span>
        </TripsInfo>
        <TripsInfo>
          <p>Planeta: </p><span>{infoTrip.planet}</span>
        </TripsInfo>
        <TripsInfo>
          <p>Duração: </p><span>{infoTrip.durationInDays}</span>
        </TripsInfo>
        <TripsInfo>
          <p>Data: </p><span>{infoTrip.date}</span>
        </TripsInfo>
      </InfoViagem>
      <BotoesAlinhamento>
        <Botoes onClick={anterior}>Voltar</Botoes>
      </BotoesAlinhamento>
      <TitulosSecundario>Candidatos Pendentes</TitulosSecundario>
      {listaCandidatos}
    </MainDiv>
  )
}
export default TripDetailsPage