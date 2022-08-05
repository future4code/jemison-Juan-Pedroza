import styled from 'styled-components'

export const BlocoPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    margin: 25px auto;
    width: 550px;
    border: 1px solid #000;
    border-radius: 25px;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-evenly;
    border-bottom: 2px solid #AAA;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 0 90%;
    align-items: center;
`

export const Teste = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;

    img{
        width: 450px;
        height: 550px;
    }
`
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
`

export const Nome = styled.div`
    display: flex;
    align-items: flex-start;
    text-align: center;
    font-size: 1.5em;
    margin-top: -15px;

    p {
        padding: 7px 10px;
    }
`
export const Texto = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: -40px;
`

export const Botoes = styled.div`
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #000;
    padding: 10px;
    
    button {
        font-size: 3em;
        padding: 10px 15px;
        background: none;
        border: none;
        cursor: pointer;
    }
`

export const Limpar = styled.button`
    display: flex;
    margin: 0 auto;
    padding: 5px 10px;
    font-size: 1.2em;
`

export const MatchArea = styled.div`
    display: flex;
    flex-direction: column;
    display: flex;
    padding: 20px;
`

export const FotoMatch = styled.img`
    width: 80px;
    max-height: 80px;
    border-radius: 50%;
    margin-right: 15px;
`

export const NomeMatch = styled.h3`
    font-size: 1.3em;
    color: #333;
`

export const DivTeste = styled.div`
    display: flex;
    margin: 6px 0;
`