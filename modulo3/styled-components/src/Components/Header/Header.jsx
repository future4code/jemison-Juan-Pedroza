import React from "react";
import styled from "styled-components"

const HeaderArea = styled.div`
    display: flex;
    justify-content:center;
    background: #939C9D;
    grid-column: 1 / 4;
    grid-row: 1 / 2;
    border-bottom: 5px solid #566566;
`

const HeaderLogo = styled.img`
    width: 200px;
    justify-items: center;
    justify-self: center;
    align-items: center;
`

export function Header (props) {
    return <HeaderArea>
            <HeaderLogo src={props.logo} alt="Logo-Labenu" />
        </HeaderArea>
}