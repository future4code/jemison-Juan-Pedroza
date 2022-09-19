import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainDiv, Titulos, Formulario, Inputs, Botoes, BotoesAlinhamento, Selected } from '../Styled';
import { useRequestDataGet } from './../Hooks/useRequestDataGet';
import { BASE_URL } from './../Constantes/Constantes';
import axios from 'axios';
import { useForm } from '../Hooks/useForm';

function ApplicationFormPage() {
  const navigate = useNavigate();

  const [idTrip, setIdTrip] = useState("")

  const [form, onChange, clear] = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${BASE_URL}trips/${idTrip}/apply`, body)
      .then((response) => {
        console.log(response.data)
        alert("Cadastrado com sucesso")
      }).catch((error) => {
        console.log(error.response.data)
        alert("Erro detectado")
      })
    clear();
  }

  const goBack = () => {
    navigate(-1)
  }

  const body = {
    name: form.name,
    age: form.age,
    applicationText: form.applicationText,
    profession: form.profession,
    country: form.country,
  }

  const [data, isLoading] = useRequestDataGet(`${BASE_URL}trips`)

  const goToDetails = (e) => {
    setIdTrip(e.target.value)
  }
  const tripsList = data && data.trips && data.trips.map((trip, key) => {
    return (
      <option key={trip.id} value={trip.id}>{!isLoading && data && data.trips && data.trips.length > 0 && trip.name}</option>
    )
  })

  return (
    <MainDiv>
      <Titulos>Inscreva-se para uma viagem</Titulos>
      <Formulario onSubmit={handleSubmit}>
        <Selected onChange={goToDetails} name="Teste1" id="t1">
          {tripsList}
        </Selected>
        <Inputs
          name="name"
          type="text"
          placeholder='Nome'
          onChange={onChange}
          value={form.name}
          pattern="^.{3,}"
          required
        />
        <Inputs
          name="age"
          type="number"
          placeholder='Idade'
          onChange={onChange}
          value={form.age}
          pattern="^.{3,}"
          required
        />
        <Inputs
          name="applicationText"
          type="text"
          placeholder='Texto de candidatura'
          onChange={onChange}
          value={form.applicationText}
          required
        />
        <Inputs
          name="profession"
          type="text"
          placeholder='Profissão'
          onChange={onChange}
          value={form.profession}
          required
        />
        <Inputs
          name="country"
          type="text"
          placeholder='Pais'
          onChange={onChange}
          value={form.country}
        />
        <BotoesAlinhamento>
          <Botoes onClick={goBack}>Voltar</Botoes>
          <Botoes>Enviar</Botoes>
        </BotoesAlinhamento>
      </Formulario>
    </MainDiv>
  )
}

export default ApplicationFormPage