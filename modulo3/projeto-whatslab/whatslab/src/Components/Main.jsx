import React, { useState } from "react";
import styled from "styled-components"

// import { MensagemBalao } from './Mensagem'
import { Inputs } from './Input';

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
    justify-content: flex-start;
    width: 100%;
`
const BalaoTexto = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    background-color: #f1f1f1;
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
export function Main() {

    const [remetente, setRemetente] = useState('');
    const [textoMensagem, setTextoMensagem] = useState('');
    const [listaChats, setListaChats] = useState ([
        //array de chats vai ficar aqui
    ])

    remetente={remetente}
    setRemetente={setRemetente}
    textoMensagem={textoMensagem}
    setTextoMensagem={setTextoMensagem}

    console.log(remetente + 'e ' + textoMensagem)

    return (
        <MainDiv>
            <AreaMensagens>
                <MensagemLinha style={{ justifyContent: 'flex-end' }}>
                    <BalaoTexto style={{ backgroundColor: '#bafaa1' }}>
                        <h1>
                            Juan
                        </h1>
                        {/* balão de exemplo, mas eu quero colocar { remetente } e { textoMensagem } 
                        pra popular o objeto que vai ser jogado pro array acima*/}
                        <p>
                            Teste
                        </p>
                    </BalaoTexto>
                </MensagemLinha>
            </AreaMensagens>
            <Inputs />
        </MainDiv>
    )
}