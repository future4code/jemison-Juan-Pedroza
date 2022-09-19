import React, { useState } from "react";
import styled from "styled-components";

const InputsArea = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    background: #1f2e30;
    border-top: 2px solid #2c3a3b;
`

const RemetenteDiv = styled.div`
    & label {
        font-weight: 400;
        font-size: 1.1rem;
        color: #DDE9EB;
        margin-left: 0.5rem;
    }
    & input {
        background-color: #DDE9EB;
        border: 1px solid #636869;
        border-radius: 4px;
        margin: 0.5em;
        width: 10em;
        padding: .5em;
    }
`

const MensagemDiv = styled.div`
    & label {
        font-weight: 400;
        font-size: 1.1rem;
        margin: 0.5rem;
        color: #DDE9EB
    }
    & input {
        background-color: #DDE9EB;
        border: 1px solid #636869;
        border-radius: 4px;
        margin: 0.5em;
        width: 65em;
        padding: .5em;
    }
`

const Botao = styled.a`
    text-decoration: none;
    font-size: 1rem;
    font-weight: 700;
    padding: 0.25em 0.75em;
    margin-left: 1rem;
    border-radius: 6px;
    border: 1px solid #636869;
    color: #1d1e1f;
    background: #DDE9EB;

    &:hover {
        background: #bbb;
        color: black;
        border: 1px solid #d0d2d3;
        transition: all 250ms ease-out;
    }
`

export function Inputs(props) {

    const lerRemetente = (event) => {
        props.setRemetente(event.target.value);
    }

    const lerTexto = (event) => {
        props.setTextoMensagem(event.target.value);
    }

    return (
        <InputsArea>
            <RemetenteDiv>
                <label>Remetente:</label>
                <input placeholder="Usuário" type="text" onChange={lerRemetente} />
            </RemetenteDiv>
            <MensagemDiv>
                <label>Mensagem:</label>
                <input placeholder="Digite uma mensagem" type="text" onChange={lerTexto}/>
            </MensagemDiv>
            <Botao>
                Enviar
            </Botao>
        </InputsArea>
    )
}