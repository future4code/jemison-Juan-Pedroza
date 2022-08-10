import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MainDiv, Titulos, Formulario, Inputs, Botoes, BotoesAlinhamento, Selected } from '../Styled';
import Paises from './Paises';

function ApplicationFormPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  return (
    <MainDiv>
      <Titulos>Inscreva-se para uma viagem</Titulos>
      <Formulario>
        <Selected name="Teste1" id="t1">
          <option value="a">Teste</option>
          <option value="b">2</option>
          <option value="c">3</option>
        </Selected>
        <Inputs type="text" placeholder='Nome' />
        <Inputs type="text" placeholder='Idade' />
        <Inputs type="text" placeholder='Texto de candidatura' />
        <Inputs type="text" placeholder='Profissão' />
        <Paises/>
      </Formulario>
      <BotoesAlinhamento>
        <Botoes onClick={goBack}>Voltar</Botoes>
        <Botoes>Enviar</Botoes>
      </BotoesAlinhamento>
    </MainDiv>
  )
}

export default ApplicationFormPage