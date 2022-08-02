import React from 'react'
import { BlocoPrincipal, Header} from './../styled';

function Matches({handlePageInicio}) {
    return (
        <BlocoPrincipal>
            <Header>
                <p>astromatch</p>
                <button onClick={() => handlePageInicio("inicial")}>icon</button>
            </Header>
            <p>oi</p>
        </BlocoPrincipal>
    )
}

export default Matches