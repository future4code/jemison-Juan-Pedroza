import React from "react";
import styled from "styled-components"

const AreaLateral = styled.div`
    display: flex;
    flex-direction: column;
    background: #275359;
    grid-column: 3 / 4;
    grid-row: 2 / 3;
`

export function AsideRight() {
    return <AreaLateral>
    </AreaLateral>
}