import React from "react";
import styled from "styled-components"

const MainDiv = styled.div`
    display: flex;
    align-items: flex-end;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    background: #131C1D;
`

const InputsArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 40%;
    width: 100%;
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
        box-shadow: 0 0 10px 2px;
        border-radius: 4px;
        margin: 0.5rem;
        width: 7rem;
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
        box-shadow: 0 0 10px 2px;
        border-radius: 4px;
        margin: 0.5rem;
        width: 25rem;
    }
`

const Botao = styled.a`
    text-decoration: none;
    font-size: 1rem;
    font-weight: 700;
    padding: 0.15rem 0.40rem;
    margin-left: 1rem;
    border-radius: 6px;
    border: 1px solid #636869;
    color: #1d1e1f;
    background: #DDE9EB;

`

export function Main() {
    return <MainDiv>
        <InputsArea>
            <RemetenteDiv>
                <label htmlFor="#">Remetente:</label>
                <input type="text" />
            </RemetenteDiv>
            <MensagemDiv>
                <label htmlFor="#">Msg:</label>
                <input type="text" />
            </MensagemDiv>
            <Botao href="#">
                Enviar Mensagem
            </Botao>
        </InputsArea>
    </MainDiv>
}