import styled from "styled-components";

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px auto;
    width: 1000px;
`

export const Titulos = styled.h1`
    font-size: 3em;
    margin: 40px;
    color: #525F6D;
    text-align: center;
`

export const BotoesAlinhamento = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 700px;
    margin-top: 15px;
`

export const Botoes = styled.button`
    font-size: 1.3em;
    background-color: #62707F;
    padding: 12px 24px;
    border: none;
    border-radius: 24px;
    color: white;
    cursor: pointer;
    margin-bottom: 20px;
`
export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    width: 70%;
`

export const Selected = styled.select`
    margin: 8px 0;
    padding: 10px;
    border: 1px solid #62707F;
    border-radius: 10px;
    color: #62707F;
    font-size: 1em;
    font-weight: 400;
`

export const Inputs = styled.input`
    margin: 8px 0;
    padding: 10px;
    border: 1px solid #62707F;
    border-radius: 10px;

    ::placeholder {
        color: #778492;
        font-size: 1em;
        font-weight: 400;
    }

    :hover {
        border: 1px solid #D97EA4;
    }
`

export const TripDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 550px;
    height: 250px;
    box-shadow: 5px 5px 6px 4px #A6A6A6;
    margin: 20px;

    p {
        color: #62707F;
        font-size: 1.2em;
        font-weight: 600;
        padding: 0 25px;
        text-align: center;
    }

    span {
        line-height: 1.5;
        font-weight: 500;
        margin: 0 -20px;
    }
`

export const TripsInfo = styled.div`
    display: flex;
`

export const ListaViagem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;
    margin-top: 30px;
    padding: 20px;
    box-shadow: 5px 5px 6px 3px #BBB;
    border-radius: 5px;
    cursor: pointer;
`