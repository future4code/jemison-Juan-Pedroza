import React, { useState } from "react";
import styled from "styled-components"

// import { MensagemBalao } from './Mensagem'
// import { Inputs } from './Input';

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    background: #131C1D;
    z-index: 0;
`
const AreaMensagens = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    height: 95%;
    overflow-y: scroll;
    padding: 25px 40px;
`

////////////////////////////////// CSS Balão de Texto /////////////////////////////////

const MensagemLinha = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`
const BalaoTexto = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    background-color: #53df6a;
    padding: 10px;
    max-width: 85ch;
    min-width: 15ch;
    border: 2px solid black;
    border-radius: 20px;
    visibility: block;

    & h1 {
        font-weight: 700;
        font-size: 1.3rem;
        margin: 0 5px;
        color: #111;
    }

    & p {
        font-weight: 500;
        line-height: 1.5;
        margin-left: 5px;
        margin-top: 5px;
        color: #222;
    }
`
const BalaoTexto2 = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    background-color: #FFF;
    padding: 10px;
    max-width: 85ch;
    min-width: 15ch;
    border: 2px solid black;
    border-radius: 20px;
    visibility: block;

    & h1 {
        font-weight: 700;
        font-size: 1.3rem;
        margin: 0 5px;
        color: #111;
    }

    & p {
        font-weight: 500;
        line-height: 1.5;
        margin-left: 5px;
        margin-top: 5px;
        color: #222;
    }
`
////////////////////////////////// CSS Inputs /////////////////////////////////

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

export function Main() {

    const [remetente, setRemetente] = useState('');
    const [textoMensagem, setTextoMensagem] = useState('');
    const [balaoCor, setBalaoCor] = useState('#FFF')
    const [listaChats, setListaChats] = useState([])

    const lerRemetente = (event) => {
        setRemetente(event.target.value);
        console.log(remetente)
    }

    const lerTexto = (event) => {
        setTextoMensagem(event.target.value);
    }

    const addBalao = (e) => {
        e.preventDefault();
        const novoBalao = { rmt: remetente, msg: textoMensagem }
        const novaListaDeChats = [...listaChats, novoBalao]
        setListaChats(novaListaDeChats)
    }

    const teste = listaChats.map((chats, key) => {
        if (remetente === "eu") {
            return (
                <MensagemLinha style={{ alignItems: 'flex-end' }}>
                    <BalaoTexto key={key}  >
                        <h1> {chats.rmt} </h1>
                        <p> {chats.msg} </p>
                    </BalaoTexto>
                </MensagemLinha>
            )
        } else {
            return (
                <MensagemLinha>
                    <BalaoTexto2 key={key}  >
                        <h1> {chats.rmt} </h1>
                        <p> {chats.msg} </p>
                    </BalaoTexto2>
                </MensagemLinha>
            )
        }
    })

    return (
        <MainDiv>
            <AreaMensagens>
                {teste}
            </AreaMensagens>
            <InputsArea>
                <RemetenteDiv>
                    <label>Remetente:</label>
                    <input placeholder="Usuário" type="text" onChange={lerRemetente} />
                </RemetenteDiv>
                <MensagemDiv>
                    <label>Mensagem:</label>
                    <input placeholder="Digite uma mensagem" type="text" onChange={lerTexto} />
                </MensagemDiv>
                <Botao onClick={addBalao}>
                    Enviar
                </Botao>
            </InputsArea>
        </MainDiv>
    )
}