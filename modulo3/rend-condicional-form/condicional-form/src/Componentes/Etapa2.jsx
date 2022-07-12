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
const Avancar = styled.button`
  font-size: 1em;
  font-weight: 600;
  margin: 10px auto;
  width: 20%;
  padding: 5px;
`

function Etapa2(props) {

    const {HandleAvancar} = props;
    return (
        <Gerais>
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
            <label>5. Qual curso?</label>
            <Inputs type="text" />
            <label>6. Qual a unidade de ensino?</label>
            <Inputs type="text" />
            <Avancar onClick={HandleAvancar}>Próxima etapa</Avancar>
        </Gerais>
    )
}

export default Etapa2