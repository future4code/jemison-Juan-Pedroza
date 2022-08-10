import styled from "styled-components";

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px auto;
    width: 500px;
`

export const Titulos = styled.h1`
    font-size: 1.5em;
    margin: 15px;
    color: #525F6D;
    text-align: center;
`

export const BotoesAlinhamento = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 400px;
    margin-top: 15px;
`

export const Botoes = styled.p`
    font-size: 0.8em;
    background-color: #62707F;
    padding: 5px 15px;
    border-radius: 15px;
    color: white;
    cursor: pointer;
`
export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    width: 70%;
`

export const Selected = styled.select`
    margin: 5px 0;
    padding: 6px;
    border: 1px solid #62707F;
    border-radius: 10px;
    color: #62707F;
    font-size: 0.7em;
    font-weight: 400;
`

export const Inputs = styled.input`
    margin: 5px 0;
    padding: 6px;
    border: 1px solid #62707F;
    border-radius: 10px;

    ::placeholder {
        color: #778492;
        font-size: 0.7em;
        font-weight: 400;
    }

    :hover {
        border: 1px solid #D97EA4;
    }
`