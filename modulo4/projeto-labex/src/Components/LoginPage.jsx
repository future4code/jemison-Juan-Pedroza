import React from 'react'
import { MainDiv, Formulario, Inputs, Botoes, BotoesAlinhamento, Titulos } from '../Styled';
import { useNavigate } from 'react-router-dom'
import { useForm } from './../Hooks/useForm';
import { BASE_URL } from './../Constantes/Constantes';
import axios from 'axios';

function LoginPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  const [form, onChange, clear] = useForm({ email: "", password: "" })

  const fazerLogin = (e) => {
    e.preventDefault()

    axios.post(`${BASE_URL}login`, form)
      .then(response => {
        localStorage.setItem('token', response.data.token)
        navigate('/admin/trips/list')
        
      })
      .catch((error) => {
        console.log(error.message)
        alert("Informações erradas")
      })
    clear();
  }
  

  return (
    <MainDiv>
      <Titulos>Login</Titulos>
      <Formulario onSubmit={fazerLogin}>
        <Inputs
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder='E-mail'
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
          required
        />
        <Inputs
          name="password"
          type="password"
          value={form.password}
          onChange={onChange}
          placeholder='Senha'
          pattern="^.{3,}"
          required
        />
        <BotoesAlinhamento>
          <Botoes onClick={() => goBack()}>Voltar</Botoes>
          <Botoes>Entrar </Botoes>
        </BotoesAlinhamento>
      </Formulario>
    </MainDiv>
  )
}

export default LoginPage