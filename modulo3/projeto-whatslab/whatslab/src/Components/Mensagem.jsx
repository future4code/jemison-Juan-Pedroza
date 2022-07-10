import React from "react";
import styled from "styled-components";

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
export function MensagemBalao({rmt, msg}) {

    return (
        <MensagemLinha style={{justifyContent: 'flex-end'}}>
            <BalaoTexto style={{backgroundColor: '#bafaa1'}}>
                <h1>
                    {rmt}
                </h1>
                <p>
                    {msg}
                </p>
            </BalaoTexto>
        </MensagemLinha>
    )
}

