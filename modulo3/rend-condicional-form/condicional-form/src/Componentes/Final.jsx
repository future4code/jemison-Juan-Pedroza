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

function Final() {
    return (
        <Gerais>
            <h1>O FORMULÁRIO ACABOU</h1>
            <h3>Muito obrigado por participar! Entraremos em contato.</h3>
        </Gerais>
    )
}

export default Final