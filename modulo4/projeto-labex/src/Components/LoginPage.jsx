import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MainDiv, Formulario, Inputs, Botoes, BotoesAlinhamento, Titulos } from '../Styled';

function LoginPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  return (
    <MainDiv>
      <Titulos>Login</Titulos>
      <Formulario>
        <Inputs type="text" placeholder='E-mail' />
        <Inputs type="text" placeholder='Senha' />
      </Formulario>
      <BotoesAlinhamento>
        <Botoes onClick={goBack}>Voltar</Botoes>
        <Botoes>Entrar</Botoes>
      </BotoesAlinhamento>
    </MainDiv>
  )
}

export default LoginPage