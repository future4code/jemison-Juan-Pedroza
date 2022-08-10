import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MainDiv, Titulos, Formulario, Inputs, Botoes, BotoesAlinhamento, Selected } from '../Styled';

function CreateTripPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  return (
    <MainDiv>
      <Titulos>Inscreva-se para uma viagem</Titulos>
      <Formulario>
        <Inputs type="text" placeholder='Nome' />
        <Selected name="Teste1" id="t1">
          <option value="a">Escolha um planeta</option>
          <option value="b">Mercúrio</option>
          <option value="c">Vênus</option>
          <option value="c">Terra</option>
          <option value="c">Marte</option>
          <option value="c">Júpiter</option>
          <option value="c">Saturno</option>
          <option value="c">Urano</option>
          <option value="c">Netuno</option>
        </Selected>
        <Inputs type="date"/>
        <Inputs type="text" placeholder='Descrição' />
        <Inputs type="text" placeholder='Duração em dias' />
      </Formulario>
      <BotoesAlinhamento>
        <Botoes onClick={goBack}>Voltar</Botoes>
        <Botoes>Enviar</Botoes>
      </BotoesAlinhamento>
    </MainDiv>
  )
}

export default CreateTripPage