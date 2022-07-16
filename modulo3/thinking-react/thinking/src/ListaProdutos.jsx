import React from 'react'

function ListaProdutos(props) {

    const testeProdutos = props.meuTeste.map((item, index) => {
        return <div key={index}>
            <p>{item.nome}</p>
            <p>{item.valor}</p>
            <img src={item.img} alt="" />
        </div>
    })

    return (
        <div>{testeProdutos}</div>
    )
}

export default ListaProdutos