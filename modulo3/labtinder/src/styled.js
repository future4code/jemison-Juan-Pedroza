import styled from 'styled-components'

export const BlocoPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    margin: 25px auto;
    width: 550px;
    border-radius: 25px;
    box-shadow: 8px 8px 14px 1px #222;
`

export const Header = styled.div`
    display: flex;
    background-color: #FEE6E1;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #AAA;
    border-radius: 25px 25px 0 0;
`

export const Logo = styled.img`
    margin-left: 175px;
`

export const BotaoMatch = styled.img`
    width: 34px;
    height: 26px;
    padding-right: 25px;
    cursor: pointer;
`

export const Body = styled.div`
    display: flex;
    background: linear-gradient(152.11deg, #F5CDC9 5.02%, #FFE4DF 56.19%, #F5CDC9 98.17%);
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
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
        box-shadow: 3px 3px 10px 5px #4A4A4A;
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

    h3,p {
        padding: 0 8px;
        font-family: 'Paprika';
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 34px;
        color: #3D444A;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`
export const Texto = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: -40px;

    p{
        padding: 0 8px;
        font-family: 'Paprika';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 22px;
        color: #3D444A;
    }
`

export const Botoes = styled.div`
    display: flex;
    justify-content: space-around;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #FEE6E1;
    border-radius: 0 0 25px 25px;
    padding: 10px;
    
    img {
        width: 100px;
        padding: 10px 15px;
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
    padding: 20px 50px;
    background: linear-gradient(152.11deg, #F5CDC9 5.02%, #FFE4DF 56.19%, #F5CDC9 98.17%);
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 0 90%;
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