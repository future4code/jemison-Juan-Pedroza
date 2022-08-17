import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainDiv, Formulario, Inputs, Botoes, BotoesAlinhamento, Titulos } from '../Styled';

function LoginPage() {
  const navigate = useNavigate();

  const [logar, setLogar] = useState({ username: "", password: "" })

  const onChange = (e) => {
    const { name, value } = e.target
    setLogar({ ...logar, [name]: value })
  }

  const goBack = () => {
    navigate(-1)
  }

  console.log(logar)

  return (
    <MainDiv>
      <Titulos>Login</Titulos>
      <Formulario>
        <Inputs
          name="username"
          type="email"
          value={logar.username}
          onChange={onChange}
          placeholder='E-mail'
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
          required
        />
        <Inputs
          name="password"
          type="password"
          value={logar.password}
          onChange={onChange}
          placeholder='Senha'
          pattern="^.{3,}"
          required
        />
        <BotoesAlinhamento>
          <Botoes onClick={() => goBack()}>Voltar</Botoes>
          <Botoes>Entrar</Botoes>
        </BotoesAlinhamento>
      </Formulario>
    </MainDiv>
  )
}

export default LoginPage