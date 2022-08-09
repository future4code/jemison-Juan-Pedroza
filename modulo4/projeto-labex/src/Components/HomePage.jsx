import React from 'react'
import { MainDiv } from '../Styled';
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();

    const goToViagens = () => {
        navigate('trips/list')
    }
    const goToAdmin = () => {
        navigate('admin/trips/list')
    }

    return (
        <MainDiv>
            <h1>LabeX</h1>
            <div>
                <button onClick={goToViagens}>Ver Viagens</button>
                <button onClick={goToAdmin}>Área de Admin</button>
            </div>
        </MainDiv>
    )
}

export default Home