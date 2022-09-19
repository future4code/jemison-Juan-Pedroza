import React from 'react'
import { MainDiv, Botoes, BotoesAlinhamento, Titulos, TripDiv, TripsInfo } from '../Styled';
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from './../Constantes/Constantes';
import { useRequestDataGet } from './../Hooks/useRequestDataGet';

function ListaViagens() {
    const navigate = useNavigate();

    const previous = () => {
        navigate(-1)
    }
    const goToApplication = () => {
        navigate('/trips/application')
    }

    const [data, isLoading, error] = useRequestDataGet(`${BASE_URL}trips`)

    const tripsList = data && data.trips && data.trips.map((trip, key) => {
        return (
            <TripDiv key={trip.id}>
                <TripsInfo>
                    <p>Nome:</p><span>{trip.name}</span>
                </TripsInfo>
                <TripsInfo>
                    <p>Descrição:</p><span>{trip.description}</span>
                </TripsInfo>
                <TripsInfo>
                    <p>Planeta:</p><span>{trip.planet}</span>
                </TripsInfo>
                <TripsInfo>
                    <p>Duração:</p><span>{trip.durationInDays}</span>
                </TripsInfo>
                <TripsInfo>
                    <p>Data:</p><span>{trip.date}</span>
                </TripsInfo>
            </TripDiv>
        )
    })

    return (
        <MainDiv>
            <BotoesAlinhamento>
                <Botoes onClick={previous}>Voltar</Botoes>
                <Botoes onClick={goToApplication}>Inscrever-se</Botoes>
            </BotoesAlinhamento>
            <Titulos>Lista de Viagens</Titulos>
            {isLoading && <p>Carregando...</p>}
            {!isLoading && error && <p>Ocorreu um erro</p>}
            {!isLoading && data && data.trips && data.trips.length > 0 && tripsList}
            {!isLoading && data && data.trips && data.trips.length === 0 && <p>Não há nenhuma viagem</p>}
        </MainDiv>
    )
}

export default ListaViagens