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

function Etapa3() {
    return (
        <Gerais>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <label>5. Por que você não terminou um curso de graduação?</label>
            <Inputs type="text" />
            <label>6. Você fez algum curso complementar?</label>
            <InputsSelect name="escolaridade" id="escolaridade">
                <option value="NEN">Nenhum</option>
                <option value="CTC">Curso técnico</option>
                <option value="CIN">Cursos de inglês</option>
            </InputsSelect>
        </Gerais>
    )
}

export default Etapa3