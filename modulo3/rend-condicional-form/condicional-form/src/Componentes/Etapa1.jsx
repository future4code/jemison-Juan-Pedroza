import React from 'react'
import styled from 'styled-components'

const Gerais = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    text-align: center;
`
const Inputs = styled.input`
    margin: 10px auto;
    width: 25%;
    padding: 5px;
`

const InputsSelect = styled.select`
    margin: 10px auto;
    width: 25%;
    padding: 5px;
`

const Avancar = styled.button`
  font-size: 1em;
  font-weight: 600;
  margin: 10px auto;
  width: 20%;
  padding: 5px;
`

function Etapa1(props) {

    const {HandleAvancar} = props;

    return (
        <Gerais>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <label>1. Qual o seu nome?</label>
            <Inputs type="text" />
            <label>2. Qual sua idade?</label>
            <Inputs type="text" />
            <label>3. Qual seu email?</label>
            <Inputs type="text" />
            <label>4. Qual a sua escolaridade?</label>
            <InputsSelect name="escolaridade" id="escolaridade">
                <option value="EMI">Ensino Médio Incompleto</option>
                <option value="EMC">Ensino Médio Completo</option>
                <option value="ESI">Ensino Superior Incompleto</option>
                <option value="ESC">Ensino Superior Completo</option>
            </InputsSelect>
            <Avancar onClick={HandleAvancar}>Próxima etapa</Avancar>
        </Gerais>
    )
}

export default Etapa1