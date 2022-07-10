import React from "react";
import styled from "styled-components"

const FooterBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-column: 1 / 4;
    grid-row: 3 / 4;
    background: #5A6F72;
`

const FooterText = styled.p`
    font-weight: 400;
    font-size: 1.0rem;
`

export function Footer() {
    return <FooterBar>
        <FooterText>Copyright © 2022 Labenu All right reserved. R. Pais Leme, 215, Conjunto 820 Pinheiros, CEP 05424-150</FooterText>
    </FooterBar>
}