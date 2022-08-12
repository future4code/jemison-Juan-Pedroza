import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainDiv, Titulos, Formulario, Inputs, Botoes, BotoesAlinhamento, Selected } from '../Styled';
import { useRequestDataGet } from './../Hooks/useRequestDataGet';
import { BASE_URL } from './../Constantes/Constantes';
import axios from 'axios';

function ApplicationFormPage() {
  const navigate = useNavigate();

  const [inputName, setInputName] = useState('')
  const [inputIdade, setInputIdade] = useState('')
  const [inputTexto, setInputTexto] = useState('')
  const [inputProfissao, setInputProfissao] = useState('')

  const goBack = () => {
    navigate(-1)
  }

  const handleInputName = (e) => {
    setInputName(e.target.value)
  }
  const handleInputIdade = (e) => {
    setInputIdade(e.target.value)
  }
  const handleInputTexto = (e) => {
    setInputTexto(e.target.value)
  }
  const handleInputProfissao = (e) => {
    setInputProfissao(e.target.value)
  }

  const body = {
    name: inputName,
    age: inputIdade,
    applicationText: inputTexto,
    profession: inputProfissao,
    country: 'brasil',
  }

  const ApplyToTripHook = () => {
    axios.post(`${BASE_URL}trips/:id/apply`, body)
      .then((response) => {
        console.log(response.data)
        alert("Cadastrado com sucesso")
      }).catch((error) => {
        console.log(error.response.data)
        alert("Erro detectado")
      })
  }

  const [data, isLoading, error] = useRequestDataGet(`${BASE_URL}trips`)
  const tripsList = data && data.trips && data.trips.map((trip, key) => {
    return (
      <option key={trip.id} value="a">
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro</p>}
        {!isLoading && data && data.trips && data.trips.length > 0 && trip.name}
        {!isLoading && data && data.trips && data.trips.length === 0 && <p>Não há nenhuma viagem</p>}
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
        <Inputs
          type="text"
          placeholder='Nome'
          onChange={handleInputName}
          value={inputName}
        />
        <Inputs
          type="text"
          placeholder='Idade'
          onChange={handleInputIdade}
          value={inputIdade}
        />
        <Inputs
          type="text"
          placeholder='Texto de candidatura'
          onChange={handleInputTexto}
          value={inputTexto}
        />
        <Inputs
          type="text"
          placeholder='Profissão'
          onChange={handleInputProfissao}
          value={inputProfissao}
        />
      </Formulario>
      <BotoesAlinhamento>
        <Botoes onClick={goBack}>Voltar</Botoes>
        <Botoes onClick={() => ApplyToTripHook()}>Enviar</Botoes>
      </BotoesAlinhamento>
    </MainDiv>
  )
}

export default ApplicationFormPage