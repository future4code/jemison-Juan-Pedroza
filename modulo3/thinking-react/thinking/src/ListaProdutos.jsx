import React from 'react'

function ListaProdutos(props) {

    const testeProdutos = props.meuTeste.map((item, index) => {
        return <div key={index}>{item.nome} {item.valor} {item.img}</div>
    })

  return (
    <div>{testeProdutos}</div>
  )
}

export default ListaProdutos