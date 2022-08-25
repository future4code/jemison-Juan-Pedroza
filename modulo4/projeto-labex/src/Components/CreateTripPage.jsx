import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MainDiv, Titulos, Formulario, Inputs, Botoes, BotoesAlinhamento, Selected } from '../Styled';
import { useProtectedPage } from './../Hooks/useProtectedPage';
import { BASE_URL } from './../Constantes/Constantes';
import { useForm } from '../Hooks/useForm';
import axios from 'axios'

function CreateTripPage() {
  useProtectedPage();

  const [form, onChange, clear] = useForm({ name: "", planet: "", date: "", description: "", durationInDays: 0 })

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  const body = {
    name: form.name,
    planet: form.planet,
    date: form.date,
    description: form.description,
    durationInDays: form.durationInDays
  }
  
  const criarTrip = () => {
    const token = localStorage.getItem("token")
    axios.post(`${BASE_URL}trips`, body, {
      headers: {
        auth: token
      }
    }).then((response) => alert("Viagem criada com sucesso!"))
      .catch((error) => console.log("deu erro"))
    clear()
  }

  return (
    <MainDiv>
      <Titulos>Inscreva-se para uma viagem</Titulos>
      <Formulario>
        <Inputs
          name="name"
          type="text"
          placeholder='Nome'
          onChange={onChange}
          value={form.name}
          required
        />
        <Selected name="planet" id="planet" onChange={onChange} value={form.planet}>
          <option value="">Escolha um planeta</option>
          <option value="Mercúrio" >Mercúrio</option>
          <option value="Vênus">Vênus</option>
          <option value="Terra">Terra</option>
          <option value="Marte">Marte</option>
          <option value="Júpiter">Júpiter</option>
          <option value="Saturno">Saturno</option>
          <option value="Urano">Urano</option>
          <option value="Netuno">Netuno</option>
        </Selected>
        <Inputs
          name="date"
          type="date"
          placeholder='Data'
          onChange={onChange}
          value={form.date}
          required
        />
        <Inputs
          name="description"
          type="text"
          placeholder='Descrição'
          onChange={onChange}
          value={form.description}
          required
        />
        <Inputs
          name="durationInDays"
          type="number"
          placeholder='Duração'
          onChange={onChange}
          value={form.durationInDays}
          required
        />
        <BotoesAlinhamento>
          <Botoes onClick={goBack}>Voltar</Botoes>
          <Botoes onClick={criarTrip}>Enviar</Botoes>
        </BotoesAlinhamento>
      </Formulario>
    </MainDiv>
  )
}

export default CreateTripPage